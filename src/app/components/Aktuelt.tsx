import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Pill, SectionHead } from "./site";
import { articleHref, articles } from "../../lib/articles";
import { Reveal } from "./Reveal";

export function Aktuelt() {
  const featured = articles[0];
  const listItems = articles.slice(1, 3);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <SectionHead
            kicker="Aktuelt"
            title="Siste nytt fra Helt Opplagt"
            action={
              <Pill to="/aktuelt" variant="outline">
                Aktuelt
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Pill>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal delay={100}>
          <Link to={articleHref(featured)} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-[12px] font-semibold text-navy backdrop-blur">
                Store Stensrud Gård
              </span>
            </div>
            <h3 className="mt-6 font-lato text-[22px] font-bold leading-[1.25] text-navy lg:text-[24px]">
              Leter du etter det perfekte stedet for ditt arrangement?
            </h3>
            <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-navy/60">
              Hos oss på Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler
              for både store og små feiringer!
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
              Les mer
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </span>
          </Link>
          </Reveal>

          <Reveal delay={200} className="flex flex-col gap-5">
            {listItems.map((item) => (
              <Link
                key={item.slug}
                to={articleHref(item)}
                className="group flex items-center gap-5 rounded-[1.5rem] bg-cloud/60 p-4 transition-colors hover:bg-cloud sm:p-5"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-[0.75rem] sm:h-24 sm:w-24">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">
                    {item.category}
                  </span>
                  <h4 className="mt-1.5 text-[16px] font-semibold leading-snug text-navy">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
