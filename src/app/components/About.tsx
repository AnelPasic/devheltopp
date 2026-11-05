import { ArrowRight, Check } from "lucide-react";
import teamImg from "../../images/om-oss/hele-gjengen.webp";
import { CONTAINER, Kicker, LinePiece, Pill } from "./site";
import { Reveal } from "./Reveal";

const points = [

  "Bedrer arbeidsdagen til over 50 000 ansatte i Oslo-området",
  "1000+ bedrifter og organisasjoner",
  "Miljøfyrtårn-sertifisert og CO2-nøytral virksomhet",
];

export function About() {
  return (
    <section id="om-oss" className="relative isolate scroll-mt-20 overflow-x-clip bg-white py-20 lg:py-28">
      <LinePiece className="-left-64 top-1/4 w-[40rem] -rotate-[18deg] text-navy/[0.12] lg:-left-56 lg:w-[56rem]" />
      <div
        className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}
      >
        <Reveal className="relative order-2 mx-auto w-full max-w-[26rem] lg:order-1 lg:max-w-[30rem]">
          <div className="aspect-[4/5] overflow-hidden rounded-[0.875rem]">
            <img
              src={teamImg}
              alt="Teamet i Helt Opplagt"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Plain white card over the photo's right edge. */}
          <div className="absolute -right-2 bottom-10 flex items-center gap-4 rounded-[0.875rem] bg-white px-5 py-4 shadow-[0_12px_32px_-16px_rgba(13,43,64,0.3)] ring-1 ring-navy/[0.06] sm:-right-6">
            <p className="font-lato text-[38px] font-light leading-none tracking-[-0.02em] text-navy">
              40+
            </p>
            <span aria-hidden="true" className="h-9 w-px bg-navy/15" />
            <p className="text-[12px] font-semibold uppercase leading-snug tracking-[0.12em] text-brand">
              År med
              <br />
              erfaring
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <Kicker>Om oss</Kicker>
          <h2 className="mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-navy sm:text-[38px] lg:text-[44px]">
            Om Helt Opplagt på jobben
          </h2>

          <p className="mt-4 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
            Siden oppstarten i 1985 har vi hatt fokus på høy kvalitet, presise leveranser, nærhet til kundene, høy
            servicegrad og riktige priser. Vi ønsker å være en leverandør som bidrar til økt trivsel og effektivitet på arbeidsplassen tiil våre kunder, og som alltid strekker seg det lille ekstra.
          </p>

          <ul className="mt-8 flex flex-col gap-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3.5">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-lime/15">
                  <Check className="h-4 w-4 text-lime" strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-navy/80">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Pill to="/om-oss" variant="outline">
              Les mer om oss
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
