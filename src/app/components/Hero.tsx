import { ArrowRight } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Link } from "react-router";
import heroLunsj from "../../images/hero/hero-lunsj.jpg";
import heroKantine from "../../images/hero/hero-kantine.jpg";
import heroFrukt from "../../images/hero/hero-frukt.jpg";
import heroCatering from "../../images/hero/hero-catering.jpg";
import heroInneklima from "../../images/hero/hero-inneklima-dno.jpg";
import heroRenhold from "../../images/hero/hero-renhold.jpg";
import { CONTAINER, ENTER, Kicker, LinePiece, Pill } from "./site";

const SLIDE_DURATION = 6000;

const slides = [
  { src: heroFrukt, label: "Frukt", href: "/tjenester/frukt" },
  { src: heroLunsj, label: "Lunsj", href: "/tjenester/lunsj" },
  { src: heroKantine, label: "Kantine", href: "/tjenester/kantine" },
  { src: heroCatering, label: "Catering", href: "/tjenester/catering" },
  { src: heroInneklima, label: "Inneklima", href: "/tjenester/inneklima" },
  { src: heroRenhold, label: "Renhold", href: "/tjenester/renhold" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const brushId = `brush-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const timer = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Fades in with the rest of the hero, so it isn't the first thing
          on screen. */}
      <LinePiece className="-right-40 top-10 w-[34rem] rotate-[14deg] text-brand/30 motion-safe:transition-opacity motion-safe:duration-1000 motion-safe:ease-out motion-safe:starting:opacity-0 [transition-delay:150ms] lg:-right-32 lg:top-6 lg:w-[46rem]" />
      <div
        className={`${CONTAINER} grid items-center gap-y-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16 lg:py-20 xl:gap-x-24 xl:py-24`}
      >
        <div className="max-w-[42rem] lg:max-w-none">
          <div className={ENTER}>
            <Kicker>Helt Opplagt på jobben</Kicker>
          </div>

          <h1
            className={`mt-5 font-lato text-[38px] font-light leading-[1.1] tracking-[-0.01em] text-navy sm:text-[48px] lg:text-[54px] xl:text-[64px] ${ENTER} [transition-delay:80ms]`}
          >
            Det{" "}
            <span className="relative isolate inline-block whitespace-nowrap font-payoff font-bold text-navy">
              Helt Opplagte
              {/* A blue brush stroke under the words: thick at the left,
                  tapering to a point at the right, with rough edges. It
                  wipes in from the left after the heading has appeared. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 300 24"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -z-10 -left-[2%] top-[80%] h-[0.3em] w-[104%] overflow-visible text-brand [clip-path:inset(0_0_0_0)] motion-safe:transition-[clip-path] motion-safe:duration-700 motion-safe:ease-out motion-safe:[transition-delay:700ms] motion-safe:starting:[clip-path:inset(0_100%_0_0)]"
              >
                <defs>
                  <filter id={brushId} x="-2%" y="-40%" width="104%" height="180%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7 0.35" numOctaves="2" seed="8" />
                    <feDisplacementMap in="SourceGraphic" scale="2.5" />
                  </filter>
                </defs>
                <path
                  d="M6 14 C 90 9, 190 6, 296 8 C 200 11, 110 16, 6 22 C 1 21, 1 15, 6 14 Z"
                  fill="currentColor"
                  filter={`url(#${brushId})`}
                />
              </svg>
            </span>{" "}
            valg for en sunnere, renere og enklere hverdag
          </h1>

          <p
            className={`mt-6 max-w-[36rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px] xl:mt-7 ${ENTER} [transition-delay:160ms]`}
          >
            Helt Opplagt på jobben er en fast leverandør av helse- og trivselstjenester til bedrifter. Vi leverer jobbfrukt, lunsj, catering, kantine, renhold og ren luft til over 50 000 ansatte.
          </p>

          <div className={`mt-9 flex flex-col gap-3 sm:flex-row ${ENTER} [transition-delay:240ms]`}>
            <Pill to="/kontakt">
              Ta kontakt for tilbud
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
            <Pill to="/tjenester" variant="outline">
              Våre tjenester
            </Pill>
          </div>
        </div>

        <div className={`${ENTER} [transition-delay:200ms]`}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-[0.875rem] lg:max-w-[30rem] xl:max-w-[33rem]">
            {slides.map((slide, i) => (
              <img
                key={slide.label}
                src={slide.src}
                alt={slide.label}
                className={
                  "absolute inset-0 h-full w-full object-cover transition-[opacity,scale] duration-[1200ms] ease-in-out motion-safe:[transition-duration:1200ms,7000ms] motion-safe:[transition-timing-function:ease-in-out,ease-out] " +
                  (i === active
                    ? "z-[1] opacity-100 motion-safe:scale-105"
                    : "z-0 opacity-0 scale-100")
                }
              />
            ))}
            <Link
              to={slides[active].href}
              className="absolute bottom-4 left-1/2 z-[2] -translate-x-1/2 rounded-[1rem] bg-white/90 px-5 py-2 text-[13px] font-semibold text-navy shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-brand"
            >
              {slides[active].label}
            </Link>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Vis ${slide.label}`}
                aria-current={i === active}
                className={
                  "h-2 rounded-full transition-all duration-300 " +
                  (i === active
                    ? "w-6 bg-brand"
                    : "w-2 bg-navy/20 hover:bg-navy/40")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
