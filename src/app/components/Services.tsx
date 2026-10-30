import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import fruktImg from "../../images/frukt/frukt.png";
import lunsjImg from "../../images/lunsj/lunsj.png";
import kantineImg from "../../images/kantine/kantine.png";
import cateringImg from "../../images/catering/catering.png";
import inneklimaImg from "../../images/inneklima/inneklima.png";
import renholdImg from "../../images/renhold/renhold.png";
import { CONTAINER, Pill, SectionHead } from "./site";
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

function ServiceCard({ service }: { service: LiveryService }) {
  return (
    <Link
      to={service.href}
      className="group relative block aspect-[4/3] isolate overflow-hidden rounded-[1.5rem] transition-transform duration-300 hover:scale-[1.012]"
    >
      <img
        src={PHOTO[service.name]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.18)_45%,rgba(0,0,0,0)_75%)]"
      />

      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
        <span className="font-lato text-[24px] font-bold leading-none text-white sm:text-[26px]">
          {service.name}
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
  return (
    <section
      id="tjenester"
      className="relative isolate scroll-mt-24 overflow-hidden bg-stone border-y border-navy/[0.06] py-20 lg:py-28"
      aria-labelledby="tjenester-tittel"
    >
      <span
        aria-hidden="true"
        className="livery-puzzle-outline aspect-[100/129] -right-14 -bottom-12 w-44 rotate-[18deg] bg-brand/25 lg:-right-8 lg:w-60"
      />
      <div className={`${CONTAINER} relative z-10`}>
        <Reveal>
          <div id="tjenester-tittel">
            <SectionHead
              kicker="Våre tjenester"
              title="En bedre arbeidsdag starter her"
              lede="Les mer om våre tjenester, og hvordan vi kan hjelpe din bedrift med en enklere, sunnnere og renere hverdag."
              action={
                <Pill to="/kontakt" variant="outline">
                  Kontakt oss
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Pill>
              }
            />
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
