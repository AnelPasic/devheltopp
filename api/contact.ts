/**
 * POST /api/contact (Vercel Function).
 *
 * Takes a contact-form lead plus where the visitor came from
 * (src/lib/attribution.ts) and e-mails it via Resend.
 *
 * Environment variables (set in Vercel → Project → Settings):
 *   RESEND_API_KEY   API key from resend.com
 *   LEAD_TO_EMAIL    where leads go, e.g. bli@heltopplagt.no
 *   LEAD_FROM_EMAIL  sender on a domain verified in Resend,
 *                    e.g. "Helt Opplagt nettside <skjema@heltopplagt.no>"
 */

interface Touch {
  channel?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
  referrer?: string;
  landingPage?: string;
  clickId?: string;
  at?: string;
}

interface Lead {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  employees?: string;
  services?: string[];
  message?: string;
  website?: string;
  elapsedMs?: number;
  page?: string;
  attribution?: { firstTouch?: Touch | null; lastTouch?: Touch | null };
}

const MIN_FILL_MS = 3000;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const clip = (v: unknown, max = 500) => String(v ?? "").trim().slice(0, max);

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function touchLines(label: string, t?: Touch | null): string[] {
  if (!t) return [`${label}: (ikke registrert)`];
  return [
    `${label}: ${clip(t.channel, 60)}`,
    `  Kilde / medium: ${clip(t.source, 120)} / ${clip(t.medium, 60)}`,
    t.campaign && `  Kampanje: ${clip(t.campaign, 200)}`,
    t.term && `  Søkeord: ${clip(t.term, 200)}`,
    t.content && `  Annonse/innhold: ${clip(t.content, 200)}`,
    t.clickId && `  Klikk-ID: ${clip(t.clickId, 200)}`,
    t.referrer && `  Henvisende side: ${clip(t.referrer, 300)}`,
    `  Landingsside: ${clip(t.landingPage, 300)}`,
    t.at && `  Tidspunkt: ${clip(t.at, 40)}`,
  ].filter(Boolean) as string[];
}

export async function POST(request: Request) {
  let lead: Lead;
  try {
    lead = (await request.json()) as Lead;
  } catch {
    return json({ ok: false, error: "Ugyldig forespørsel" }, 400);
  }

  /* Spam: a filled honeypot or an instant submit is answered "ok" but
     dropped, so bots get no signal. */
  if (clip(lead.website) || (lead.elapsedMs ?? 0) < MIN_FILL_MS) {
    return json({ ok: true });
  }

  const name = clip(lead.name, 120);
  const email = clip(lead.email, 200);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Navn og gyldig e-post må fylles ut" }, 400);
  }

  const { RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !LEAD_TO_EMAIL || !LEAD_FROM_EMAIL) {
    console.error("contact: missing RESEND_API_KEY / LEAD_TO_EMAIL / LEAD_FROM_EMAIL");
    return json({ ok: false, error: "Skjemaet er ikke satt opp" }, 500);
  }

  const company = clip(lead.company, 160);
  const last = lead.attribution?.lastTouch ?? null;
  const first = lead.attribution?.firstTouch ?? null;
  const channel = clip(last?.channel, 60) || "Ukjent";

  const text = [
    "Ny henvendelse fra kontaktskjemaet",
    "",
    `Navn: ${name}`,
    `Firma: ${company || "-"}`,
    `E-post: ${email}`,
    `Telefon: ${clip(lead.phone, 40) || "-"}`,
    `Antall ansatte: ${clip(lead.employees, 20) || "-"}`,
    `Interessert i: ${(lead.services ?? []).map((s) => clip(s, 40)).join(", ") || "-"}`,
    "",
    "Melding:",
    clip(lead.message, 5000) || "-",
    "",
    "— Kilde —",
    ...touchLines("Dette besøket", last),
    ...touchLines("Første besøk (krever samtykke)", first),
    `Skjema sendt fra: ${clip(lead.page, 200) || "-"}`,
    `Mottatt: ${new Date().toISOString()}`,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: LEAD_FROM_EMAIL,
      to: LEAD_TO_EMAIL.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `Ny henvendelse – ${channel} – ${company || name}`,
      text,
      html: `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    }),
  });

  if (!res.ok) {
    console.error("contact: Resend failed", res.status, await res.text());
    return json({ ok: false, error: "Kunne ikke sende" }, 502);
  }
  return json({ ok: true });
}
