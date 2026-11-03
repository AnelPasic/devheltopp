import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router";
import logoSrc from "../../images/logo/helt-opplagt.png";
import miljofyrtarnImg from "../../images/ansvar/miljofyrtarn-logo.svg";
import { CONTAINER, LinePiece, Pill } from "./site";
import { SERVICES } from "./livery";

const companyLinks: { label: string; to?: string; href?: string }[] = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Ansvar", to: "/ansvar" },
  { label: "Referanser", to: "/referanser" },
  { label: "Karriere", href: "https://karriere.heltopplagt.com/" },
  { label: "Kontakt", to: "/kontakt" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/Heltopplagt", Icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/helt-opplagt-as/", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/heltopplagt/", Icon: Instagram },
];

const HEADING =
  "h2-plain mb-5 font-lato text-[16px] font-bold text-white";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white">
      <LinePiece className="-left-48 -top-28 w-[36rem] -rotate-[18deg] text-white/[0.14] lg:-left-32 lg:-top-40 lg:w-[50rem]" />
      <div
        className={`${CONTAINER} grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-10 lg:py-20`}
      >
        <div className="col-span-2 lg:col-span-1">
          <img
            src={logoSrc}
            alt="Helt Opplagt"
            className="mb-6 h-8 object-contain brightness-0 invert"
          />
          <p className="mb-7 max-w-[300px] text-[14px] leading-[1.7] text-white/60">
            Det Helt Opplagte valg for en sunnere, renere og enklere hverdag!
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-aqua hover:text-aqua"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="mailto:bli@heltopplagt.no"
              aria-label="E-post"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-aqua hover:text-aqua"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Miljøfyrtårn badge: the logo, a thin divider and the
              certification line, linking to our responsibility page. */}
          <Link
            to="/ansvar"
            aria-label="Miljøfyrtårn-sertifisert virksomhet. Les om vårt samfunnsansvar"
            className="mt-8 inline-flex items-center gap-4 opacity-90 transition-opacity hover:opacity-100"
          >
            <span className="flex h-16 w-[4.75rem] flex-shrink-0 items-center justify-center overflow-hidden rounded-[0.5rem] bg-white">
              <img src={miljofyrtarnImg} alt="" className="h-full w-full object-contain" />
            </span>
            <span aria-hidden="true" className="h-14 w-px bg-white/35" />
            <span className="font-archivo text-[14px] font-bold uppercase leading-tight tracking-[0.04em] text-white">
              Sertifisert
              <br />
              virksomhet
            </span>
          </Link>
        </div>

        <nav className="flex flex-col gap-2.5">
          <h2 className={HEADING}>Tjenester</h2>
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="text-[14px] text-white/70 transition-colors hover:text-aqua"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-2.5">
          <h2 className={HEADING}>Selskapet</h2>
          {companyLinks.map((l) =>
            l.href ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-white/70 transition-colors hover:text-aqua"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.to!}
                className="text-[14px] text-white/70 transition-colors hover:text-aqua"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="col-span-2 lg:col-span-1">
          <h2 className={HEADING}>Kontakt</h2>
          <a
            href="tel:02346"
            className="flex items-center gap-3 py-1.5 text-[15px] font-semibold text-white transition-colors hover:text-aqua"
          >
            <Phone className="h-4 w-4 text-aqua" strokeWidth={2.25} />
            02346
          </a>
          <a
            href="mailto:bli@heltopplagt.no"
            className="flex items-center gap-3 py-1.5 text-[14px] text-white/70 transition-colors hover:text-aqua"
          >
            <Mail className="h-4 w-4 text-aqua" strokeWidth={2} />
            bli@heltopplagt.no
          </a>
          <p className="mt-1.5 text-[14px] text-white/50">
            Slimeveien 2b, 1275 Oslo
          </p>
          <Pill to="/kontakt" className="mt-6">
            Kontakt oss
          </Pill>
          <p className="mt-6 max-w-[300px] text-[13px] leading-[1.7] text-white/50">
            Prøv også vårt søsterselskap{" "}
            <a
              href="https://retthjem.no"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 transition-colors hover:text-aqua"
            >
              Rett Hjem
            </a>
            . Rett Hjem er en dagligvarebutikk på nett som leverer absolutt alt
            en bedrift trenger til lunsj, møter, event, overtid etc. i
            Stor-Oslo.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className={`${CONTAINER} flex flex-wrap items-center justify-between gap-2 py-6`}
        >
          <p className="text-[12px] text-white/45">
            &copy; {new Date().getFullYear()} Helt Opplagt. Alle rettigheter
            reservert.
          </p>
          <p className="text-[12px] text-white/45">Helt Opplagt på jobben</p>
        </div>
      </div>
    </footer>
  );
}
