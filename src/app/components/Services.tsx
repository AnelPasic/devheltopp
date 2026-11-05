import { ArrowUpRight } from "lucide-react";
import { useId } from "react";
import { Link } from "react-router";
import fruktImg from "../../images/frukt/frukt.webp";
import lunsjImg from "../../images/lunsj/lunsj.webp";
import kantineImg from "../../images/kantine/kantine.webp";
import cateringImg from "../../images/catering/catering.webp";
import inneklimaImg from "../../images/hero/hero-inneklima-dno.webp";
import renholdImg from "../../images/renhold/renhold.webp";
import { BrushStroke, CONTAINER, Pill, SectionHead } from "./site";
import { SERVICES, type LiveryService } from "./livery";
import { Reveal } from "./Reveal";

const PHOTO: Record<string, string> = {
  Frukt: fruktImg,
  Lunsj: lunsjImg,
  Kantine: kantineImg,
  Catering: cateringImg,
  Inneklima: inneklimaImg,
  Renhold: renholdImg,
};

/** Photo card for one service: name on a light dark fade at the foot, with a
    round arrow. Used on the home page and on /tjenester. */
export function ServiceCard({ service }: { service: LiveryService }) {
  return (
    <Link
      to={service.href}
      className="group relative block aspect-[4/3] isolate overflow-hidden rounded-[1.25rem] transition-transform duration-300 hover:scale-[1.012]"
    >
      <img
        src={PHOTO[service.name]}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0)_60%)]"
      />

      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
        {/* The navbar's blue brush stroke wipes in under the name on hover. */}
        <span className="relative isolate font-lato text-[24px] font-bold leading-none text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] sm:text-[26px]">
          {service.name}
          <BrushStroke className="-left-[4%] top-[78%] h-[0.38em] w-[108%] transition-[clip-path] duration-500 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]" />
        </span>

        {/* The "Les mer" affordance: a white disc that fills brand-blue on
            hover while the arrow turns from diagonal to straight right. */}
        <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-navy transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <ArrowUpRight
            className="h-5 w-5 transition-transform duration-300 ease-out group-hover:rotate-45"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <span className="sr-only">Les mer om {service.name}</span>
        </span>
      </span>
    </Link>
  );
}

export function Services() {
  const uid = useId().replace(/:/g, "");
  return (
    <section
      id="tjenester"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
      aria-labelledby="tjenester-tittel"
    >
      <div className={CONTAINER}>
        <Reveal>
          <div id="tjenester-tittel" className="relative">
            <SectionHead
              kicker="Våre tjenester"
              title={
                <>
                  En bedre arbeidsdag{" "}
                  {/* The hero's blue brush stroke, wiping in once the
                      section has scrolled into view. */}
                  <span className="relative isolate inline-block whitespace-nowrap">
                    starter her
                    <BrushStroke className="-left-[2%] top-[80%] h-[0.28em] w-[104%] [clip-path:inset(0_100%_0_0)] group-data-shown/reveal:[clip-path:inset(0_0_0_0)] motion-safe:transition-[clip-path] motion-safe:duration-700 motion-safe:ease-out motion-safe:[transition-delay:500ms]" />
                  </span>
                </>
              }
              lede="Les mer om våre tjenester, og hvordan vi kan hjelpe din bedrift med en enklere, sunnnere og renere hverdag."
              action={
                <Pill to="/kontakt" variant="outline">
                  Kontakt oss
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Pill>
              }
            />
            {/* A hand-drawn arrow from the intro down towards the cards,
                painted with the same brush as the heading: wide where it
                starts, tapering thin into the tip, with rough edges. A
                stroke in the mask draws it in after the heading's brush
                stroke. Desktop only. */}
            <svg
              aria-hidden="true"
              viewBox="0 0 120 90"
              className="pointer-events-none absolute -bottom-7 left-[35rem] hidden w-[110px] overflow-visible text-brand lg:block"
            >
              <defs>
                <filter id={`arrow-rough-${uid}`} x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.7 0.35" numOctaves="2" seed="8" />
                  <feDisplacementMap in="SourceGraphic" scale="1.5" />
                </filter>
                <mask id={`arrow-draw-${uid}`} maskUnits="userSpaceOnUse" x="-10" y="-10" width="140" height="110">
                  <g fill="none" stroke="white" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round">
                    <path pathLength={1} d="M4 10 C 34 2, 70 10, 86 34 C 94 46, 97 60, 96 78" className="[stroke-dasharray:1] [stroke-dashoffset:1] group-data-shown/reveal:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] motion-safe:ease-out motion-safe:duration-700 motion-safe:[transition-delay:700ms]" />
                    <path pathLength={1} d="M85 66 C 89 71, 93 76, 96 80 C 99 75, 103 70, 108 65" className="[stroke-dasharray:1] [stroke-dashoffset:1] group-data-shown/reveal:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] motion-safe:ease-out motion-safe:duration-200 motion-safe:[transition-delay:1350ms]" />
                  </g>
                </mask>
              </defs>
              <g fill="currentColor" filter={`url(#arrow-rough-${uid})`} mask={`url(#arrow-draw-${uid})`}>
                <path d="M4.8 13.3 L8.5 12.3 L12.2 11.5 L15.9 10.9 L19.6 10.4 L23.4 10.1 L27.2 9.9 L31.0 10.0 L34.8 10.2 L38.6 10.5 L42.3 11.0 L46.0 11.7 L49.6 12.5 L53.1 13.5 L56.6 14.7 L59.9 16.0 L63.2 17.5 L66.4 19.1 L69.4 20.9 L72.3 22.9 L75.0 25.0 L77.6 27.3 L80.0 29.7 L82.3 32.4 L84.3 35.2 L85.3 36.6 L86.2 38.0 L87.1 39.5 L87.9 41.0 L88.7 42.5 L89.5 44.1 L90.2 45.7 L90.8 47.3 L91.4 48.9 L92.0 50.6 L92.5 52.3 L92.9 54.1 L93.3 55.9 L93.7 57.7 L94.0 59.5 L94.3 61.4 L94.6 63.3 L94.7 65.3 L94.9 67.3 L95.0 69.3 L95.1 71.4 L95.1 73.6 L95.1 75.7 L95.0 78.0 L97.0 78.0 L97.1 75.8 L97.2 73.6 L97.3 71.4 L97.3 69.3 L97.3 67.2 L97.2 65.1 L97.1 63.1 L96.9 61.1 L96.7 59.1 L96.5 57.2 L96.2 55.3 L95.8 53.4 L95.4 51.6 L95.0 49.8 L94.5 48.0 L93.9 46.2 L93.3 44.4 L92.7 42.7 L92.0 41.0 L91.2 39.4 L90.4 37.7 L89.6 36.1 L88.7 34.5 L87.7 32.8 L85.5 29.8 L83.2 26.9 L80.6 24.2 L77.9 21.7 L75.0 19.3 L71.9 17.1 L68.7 15.0 L65.4 13.2 L61.9 11.5 L58.4 10.0 L54.7 8.7 L50.9 7.5 L47.1 6.5 L43.2 5.7 L39.3 5.0 L35.3 4.5 L31.3 4.2 L27.2 4.1 L23.2 4.1 L19.1 4.3 L15.1 4.6 L11.1 5.2 L7.1 5.9 L3.2 6.7 Z" />
                <path d="M84.4 66.5 L85.5 68.0 L86.6 69.6 L87.8 71.1 L88.9 72.6 L89.9 74.1 L91.0 75.6 L92.0 77.0 L93.0 78.3 L93.9 79.6 L94.8 80.9 L97.2 79.1 L96.2 77.9 L95.2 76.6 L94.1 75.4 L93.0 74.0 L91.8 72.6 L90.6 71.2 L89.4 69.8 L88.1 68.4 L86.9 67.0 L85.6 65.5 Z" />
                <path d="M97.3 80.8 L98.1 79.2 L99.0 77.7 L99.9 76.2 L100.9 74.7 L102.0 73.1 L103.2 71.6 L104.4 70.1 L105.7 68.5 L107.0 67.0 L108.5 65.5 L107.5 64.5 L106.0 66.0 L104.5 67.5 L103.1 68.9 L101.8 70.4 L100.5 71.9 L99.2 73.3 L98.0 74.8 L96.9 76.3 L95.8 77.8 L94.7 79.2 Z" />
              </g>
            </svg>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
