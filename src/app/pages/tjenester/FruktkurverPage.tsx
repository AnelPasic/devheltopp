import { Link } from "react-router";
import { ArrowRight, Download } from "lucide-react";
import { Breadcrumb, Head, ServiceFooter, type SubService } from "../../components/ServicePage";
import { CONTAINER, ENTER_DESKTOP, FADE_DESKTOP, Pill } from "../../components/site";
import { useDocumentMeta } from "../../../lib/use-document-meta";
import { fruktData } from "./Frukt";
import heroImg from "../../../images/frukt/fruktkurv-kontor.webp";

/**
 * /tjenester/frukt/fruktkurver: all fruit baskets on one page, with help to
 * choose between them, and a card per basket that links to its detail page.
 * Copy supplied by Gard.
 */

/* What each basket is the right choice for. The order here is the order of
   the cards, the same as everywhere else. Baskets not listed here follow after. */
const GUIDE: Record<string, { label: string; text: string }> = {
  hverdagskurven: {
    label: "Lavest mulig pris",
    text: "Velg Hverdagskurven hvis dere først og fremst ønsker klassisk frukt til lavest mulig pris.",
  },
  gokurven: {
    label: "Pris og variasjon",
    text: "Velg Go'kurven hvis dere ønsker mer variasjon gjennom sesongen uten å gå opp til de mest innholdsrike kurvene.",
  },
  knaskekurven: {
    label: "Frukt, grønt og nøtter",
    text: "Velg Knaskekurven hvis dere vil ha mer enn tradisjonell frukt og ønsker en miks av frukt, grønt og nøtter.",
  },
  superkurven: {
    label: "Mest variasjon",
    text: "Velg Superkurven hvis variasjon er viktigere enn lavest mulig pris, og dere ønsker sesongvarer, mer eksotiske innslag, grønt og nøtter.",
  },
  rullekurven: {
    label: "Ny variasjon",
    text: "Velg Rullekurven hvis dere ikke ønsker den samme typen kurv hver uke.",
  },
};

const baskets = (() => {
  const all = fruktData.subServices.filter((s) => s.variantOf === "fruktkurver");
  const order = Object.keys(GUIDE);
  const rank = (s: SubService) => {
    const i = order.indexOf(s.slug);
    return i === -1 ? order.length : i;
  };
  return [...all].sort((a, b) => rank(a) - rank(b));
})();

/* For baskets without a guide line (Smoothiekurven), the short text from its
   card on /frukt. */
const catalogText = (slug: string) =>
  fruktData.catalogs
    ?.flatMap((c) => c.items)
    .find((item) => item.to === `${fruktData.path}/${slug}`)?.description;

export function FruktkurverPage() {
  useDocumentMeta(
    "Fruktkurver til bedrifter",
    "Helt Opplagt tilbyr flere fruktkurver til bedrifter i Oslo og Stor-Oslo. Her kan dere sammenligne innhold og prisnivå og velge etter antall ansatte, budsjett og hvor mye variasjon dere ønsker."
  );

  return (
    <div className="min-h-dvh bg-white">
      {/* Hero */}
      <section className="text-navy">
        <div
          className={`${CONTAINER} grid gap-10 py-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:items-center lg:gap-16 lg:py-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] xl:gap-20`}
        >
          <div className="order-2 lg:order-1">
            <div className={`${ENTER_DESKTOP} [transition-delay:100ms]`}>
              <Breadcrumb
                items={[
                  { label: "Alle tjenester", to: "/tjenester" },
                  { label: "Frukt", to: fruktData.path },
                  { label: "Fruktkurver" },
                ]}
              />
            </div>
            <h1
              className={`font-lato text-[38px] font-light leading-[1.05] tracking-[-0.01em] text-navy sm:text-[48px] lg:text-[56px] xl:text-[64px] ${ENTER_DESKTOP} [transition-delay:180ms]`}
            >
              Fruktkurver til bedrifter
            </h1>
            <p className={`service-subtitle mt-5 text-navy ${ENTER_DESKTOP} [transition-delay:260ms]`}>
              Finn riktig fruktkurv til arbeidsplassen
            </p>
            <div className={`mt-5 max-w-[36rem] space-y-4 text-[15px] leading-relaxed text-navy/65 lg:text-[17px] ${ENTER_DESKTOP} [transition-delay:340ms]`}>
              <p>
                Billigst, mest variert eller mer grønt? Det finnes ikke én fruktkurv som passer alle arbeidsplasser.
              </p>
              <p>
                Helt Opplagt tilbyr flere fruktkurver til bedrifter i Oslo og Stor-Oslo. Her kan dere sammenligne innhold og prisnivå og velge etter antall ansatte, budsjett og hvor mye variasjon dere ønsker.
              </p>
            </div>
            <div className={`mt-8 flex flex-col gap-3 sm:flex-row xl:mt-10 ${ENTER_DESKTOP} [transition-delay:420ms]`}>
              <Pill to="/kontakt">
                Ta kontakt for tilbud
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Pill>
              {fruktData.brochureUrl && (
                <Pill href={fruktData.brochureUrl} variant="outline" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" strokeWidth={2.5} />
                  Brosjyre
                </Pill>
              )}
            </div>
          </div>

          <div className={`order-1 mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:order-2 lg:max-w-none ${FADE_DESKTOP}`}>
            <div className="aspect-square overflow-hidden rounded-[0.875rem]">
              <img
                src={heroImg}
                alt="Fruktkurv fra Helt Opplagt på et kontor"
                fetchpriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[25%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Which basket: one card per basket, linking to its page. */}
      <section className="py-14 lg:py-24 lg:pt-16">
        <div className={CONTAINER}>
          <div className="rounded-[2rem] bg-stone px-5 py-12 sm:px-10 lg:px-14 lg:py-16">
            <Head title="Hvilken fruktkurv bør dere velge?" />
            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {baskets.map((b) => {
                const guide = GUIDE[b.slug];
                return (
                  <Link
                    key={b.slug}
                    to={`${fruktData.path}/${b.slug}`}
                    className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.18)]"
                  >
                    <div className="relative h-48 overflow-hidden bg-white">
                      <img
                        src={b.image}
                        alt={b.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-2 sm:p-7 sm:pt-2">
                      <h3 className="font-lato text-[20px] font-bold leading-tight text-navy">
                        {b.title}
                      </h3>
                      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy/65">
                        {guide?.text ?? catalogText(b.slug) ?? b.description}
                      </p>
                      {b.priceNote && (
                        <p className="mt-4 text-[14px] font-semibold text-navy">{b.priceNote}</p>
                      )}
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                        Les mer
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Size and price, side by side. */}
      <section className="pb-16 lg:pb-24">
        <div className={`${CONTAINER} grid gap-14 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <Head title="Hvor stor fruktkurv trenger dere?" />
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-navy/70">
              <p>
                Riktig størrelse avhenger av hvor mange som faktisk er på kontoret, hvor ofte dere får levering og hvor mye frukt som vanligvis blir spist.
              </p>
              <p>
                Har dere hybridarbeid, bør dere ta utgangspunkt i normal kontortilstedeværelse - ikke totalt antall ansatte.
              </p>
              <p>
                Er dere usikre, fortell oss hvor mange som vanligvis er på jobb og hvor ofte dere ønsker levering. Vi foreslår kurvtype og størrelse.
              </p>
            </div>
          </div>

          <div>
            <Head title="Hva koster en fruktkurv til bedriften?" />
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-navy/70">
              <p>
                Prisen avhenger av hvilken kurv dere velger, størrelse og hvor ofte dere ønsker levering.
              </p>
              <p>
                Som priseksempel starter Hverdagskurven på omtrent 6 kroner per person per dag.
              </p>
              <p>
                De mer varierte alternativene ligger i dagens eksempler på omtrent 8 - 11 kroner per person per dag.
              </p>
              <p className="font-medium text-navy">
                Vi hjelper dere å finne en løsning som passer både antall ansatte og budsjett.
              </p>
            </div>
            <div className="mt-8">
              <Pill to="/kontakt">
                Ta kontakt for tilbud
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Pill>
            </div>
          </div>
        </div>
      </section>

      <ServiceFooter currentPath={fruktData.path} ground="sky" />
    </div>
  );
}
