/**
 * Where a visitor came from, attached to contact-form leads.
 *
 * On first load we read the referrer, the landing URL, UTM tags and ad click
 * IDs, and sort them into a channel. Before the visitor accepts the consent
 * banner, that "touch" lives in memory only (it survives navigation inside
 * the SPA but not a reload). After "Godta", the current visit's touch goes in
 * sessionStorage and the very first touch in localStorage for 90 days.
 */

export type Channel =
  | "Google Ads / Betalt søk"
  | "Betalt sosial"
  | "AI-assistent"
  | "Organisk søk"
  | "Organisk sosial"
  | "E-post"
  | "Kampanje (annen)"
  | "Henvisning"
  | "Direkte";

export interface Touch {
  channel: Channel;
  source: string;
  medium: string;
  campaign?: string;
  term?: string;
  content?: string;
  referrer?: string;
  landingPage: string;
  clickId?: string;
  at: string;
}

export interface Attribution {
  firstTouch: Touch | null;
  lastTouch: Touch | null;
}

export type Consent = "granted" | "denied";

const CONSENT_KEY = "ho-consent";
const FIRST_KEY = "ho-first-touch";
const LAST_KEY = "ho-last-touch";
const FIRST_TTL_MS = 90 * 24 * 60 * 60 * 1000;

/* Hosts, matched against the end of the referrer host (or utm_source). Add
   new AI tools or sites here. */
const AI_HOSTS = [
  "chatgpt.com",
  "chat.openai.com",
  "perplexity.ai",
  "gemini.google.com",
  "copilot.microsoft.com",
  "claude.ai",
  "you.com",
];
const SEARCH_HOSTS = [
  "google.",
  "bing.com",
  "duckduckgo.com",
  "yahoo.",
  "ecosia.org",
  "kvasir.no",
];
const SOCIAL_HOSTS = [
  "facebook.com",
  "linkedin.com",
  "lnkd.in",
  "instagram.com",
  "t.co",
  "x.com",
  "twitter.com",
  "youtube.com",
];
const PAID_MEDIUMS = ["cpc", "ppc", "paid", "paidsearch", "paid_search"];
const PAID_SOCIAL_MEDIUMS = ["paid_social", "paidsocial", "paid-social"];

function matchesHost(host: string, list: string[]) {
  return list.some((h) =>
    h.endsWith(".") ? host.includes(h) : host === h || host.endsWith("." + h)
  );
}

export interface RawVisit {
  url: string;
  referrer: string;
  ownHost: string;
  at?: string;
}

/** Pure: turns one page load into a touch. Exported for testing. */
export function classify({ url, referrer, ownHost, at }: RawVisit): Touch {
  const u = new URL(url);
  const q = u.searchParams;
  const get = (k: string) => q.get(k)?.trim() || undefined;

  let refHost = "";
  try {
    refHost = referrer ? new URL(referrer).hostname.replace(/^www\./, "") : "";
  } catch {
    refHost = "";
  }
  if (refHost === ownHost.replace(/^www\./, "")) refHost = "";

  const utm = {
    source: get("utm_source")?.toLowerCase(),
    medium: get("utm_medium")?.toLowerCase(),
    campaign: get("utm_campaign"),
    term: get("utm_term"),
    content: get("utm_content"),
  };
  const googleClick = get("gclid") ?? get("gbraid") ?? get("wbraid");
  const bingClick = get("msclkid");
  const socialClick = get("fbclid") ?? get("li_fat_id");

  const base = {
    campaign: utm.campaign,
    term: utm.term,
    content: utm.content,
    referrer: refHost ? referrer : undefined,
    landingPage: u.pathname + u.search,
    at: at ?? new Date().toISOString(),
  };
  const touch = (
    channel: Channel,
    source: string,
    medium: string,
    clickId?: string
  ): Touch => ({ channel, source, medium, clickId, ...base });

  if (googleClick) return touch("Google Ads / Betalt søk", utm.source ?? "google", utm.medium ?? "cpc", googleClick);
  if (bingClick) return touch("Google Ads / Betalt søk", utm.source ?? "bing", utm.medium ?? "cpc", bingClick);
  if (utm.medium && PAID_MEDIUMS.includes(utm.medium))
    return touch("Google Ads / Betalt søk", utm.source || refHost || "ukjent", utm.medium);
  if (utm.medium && PAID_SOCIAL_MEDIUMS.includes(utm.medium))
    return touch("Betalt sosial", utm.source || refHost || "ukjent", utm.medium, socialClick);

  const aiSource = [utm.source ?? "", refHost].find((h) => h && matchesHost(h, AI_HOSTS));
  if (aiSource) return touch("AI-assistent", aiSource, utm.medium ?? "referral");

  if (!utm.source && refHost && matchesHost(refHost, SEARCH_HOSTS))
    return touch("Organisk søk", refHost, "organic");
  if (!utm.source && refHost && matchesHost(refHost, SOCIAL_HOSTS))
    return touch("Organisk sosial", refHost, "social", socialClick);

  if (utm.medium === "email") return touch("E-post", utm.source ?? "e-post", "email");
  if (utm.source || utm.medium)
    return touch("Kampanje (annen)", utm.source ?? "ukjent", utm.medium ?? "ukjent");
  if (refHost) return touch("Henvisning", refHost, "referral");
  return touch("Direkte", "(direkte)", "(none)");
}

/* ---------- storage ---------- */

let memoryTouch: Touch | null = null;

function safeGet(store: Storage | undefined, key: string): string | null {
  try {
    return store?.getItem(key) ?? null;
  } catch {
    return null;
  }
}
function safeSet(store: Storage | undefined, key: string, value: string) {
  try {
    store?.setItem(key, value);
  } catch {
    /* storage blocked: memory only */
  }
}
function safeRemove(store: Storage | undefined, key: string) {
  try {
    store?.removeItem(key);
  } catch {
    /* ignore */
  }
}
const local = () => (typeof window === "undefined" ? undefined : window.localStorage);
const session = () => (typeof window === "undefined" ? undefined : window.sessionStorage);

export function getConsent(): Consent | null {
  const v = safeGet(local(), CONSENT_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

function readFirst(): Touch | null {
  const raw = safeGet(local(), FIRST_KEY);
  if (!raw) return null;
  try {
    const t = JSON.parse(raw) as Touch;
    if (Date.now() - new Date(t.at).getTime() > FIRST_TTL_MS) return null;
    return t;
  } catch {
    return null;
  }
}

function persist(touch: Touch) {
  safeSet(session(), LAST_KEY, JSON.stringify(touch));
  if (!readFirst()) safeSet(local(), FIRST_KEY, JSON.stringify(touch));
}

/** Records the visitor's choice; on "granted" the current touch is saved. */
export function setConsent(value: Consent) {
  safeSet(local(), CONSENT_KEY, value);
  if (value === "granted") {
    if (memoryTouch) persist(memoryTouch);
  } else {
    safeRemove(local(), FIRST_KEY);
    safeRemove(session(), LAST_KEY);
  }
}

/** Call once when the app starts. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const touch = classify({
    url: window.location.href,
    referrer: document.referrer,
    ownHost: window.location.hostname,
  });
  /* Within one tab session, keep the touch that started it: an internal
     reload has no referrer and would otherwise look "Direkte". */
  const existing = safeGet(session(), LAST_KEY);
  const sameSessionReload = existing && touch.channel === "Direkte" && !touch.referrer;
  memoryTouch = sameSessionReload ? (JSON.parse(existing) as Touch) : touch;
  if (getConsent() === "granted" && !sameSessionReload) persist(memoryTouch);
}

/** Attribution to send with a lead. */
export function getAttribution(): Attribution {
  const granted = getConsent() === "granted";
  const storedLast = granted ? safeGet(session(), LAST_KEY) : null;
  return {
    firstTouch: granted ? readFirst() : null,
    lastTouch: storedLast ? (JSON.parse(storedLast) as Touch) : memoryTouch,
  };
}
