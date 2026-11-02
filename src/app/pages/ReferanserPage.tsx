import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { CONTAINER } from "../components/site";
import { PageHeader } from "../components/PageHeader";
import { reviewId, reviews, type Review } from "../../lib/reviews";
import kantineImg from "../../images/kantine/sport-1-10.jpg";
import lunsjImg from "../../images/lunsj/lunsj.jpg";
import fruktImg from "../../images/frukt/fruktkurv-mote.jpg";
import inneklimaImg from "../../images/inneklima/kontor-luftrenser.jpg";
import renholdImg from "../../images/renhold/gulvvask-lager.jpg";
import { useDocumentMeta } from "../../lib/use-document-meta";

type Service = Review["service"];

/* One colour per service from the brand palette: the line under each photo
   the hover colour of its arrow and the tint on each quote's service tag. Full
   class strings so Tailwind picks them up. */
const COLORS: Record<Service, { solid: string; soft: string; arrow: string }> = {
  Frukt: { solid: "bg-lime", soft: "bg-lime/15", arrow: "group-hover:text-lime" },
  Inneklima: { solid: "bg-brand", soft: "bg-brand/10", arrow: "group-hover:text-brand" },
  Renhold: { solid: "bg-aqua", soft: "bg-aqua/20", arrow: "group-hover:text-aqua" },
  Kantine: { solid: "bg-amber", soft: "bg-amber/15", arrow: "group-hover:text-amber" },
  Lunsj: { solid: "bg-deck", soft: "bg-deck/10", arrow: "group-hover:text-deck" },
};

const SERVICES: {
  service: Service;
  to: string;
  image: string;
  imageAlt: string;
  /** CSS object-position, for photos whose subject is off-centre. */
  imagePosition?: string;
}[] = [
  { service: "Kantine", to: "/tjenester/kantine", image: kantineImg, imageAlt: "Ansatte forsyner seg fra buffeten i kantinen" },
  { service: "Lunsj", to: "/tjenester/lunsj", image: lunsjImg, imageAlt: "Lunsj levert på jobben av Helt Opplagt", imagePosition: "90% center" },
  { service: "Frukt", to: "/tjenester/frukt", image: fruktImg, imageAlt: "Kolleger deler en fruktkurv i et møte" },
  { service: "Inneklima", to: "/tjenester/inneklima", image: inneklimaImg, imageAlt: "Luftrenser på et kontor" },
  { service: "Renhold", to: "/tjenester/renhold", image: renholdImg, imageAlt: "Gulvvask på lager med skuremaskin" },
];

/** One card per service in the wall: its photo, linking on to the service. */
function ServiceTile({ entry }: { entry: (typeof SERVICES)[number] }) {
  return (
    <Link
      to={entry.to}
      className="group block overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={entry.image}
          alt={entry.imageAlt}
          loading="lazy"
          decoding="async"
          style={entry.imagePosition ? { objectPosition: entry.imagePosition } : undefined}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div aria-hidden="true" className={`h-1.5 ${COLORS[entry.service].solid}`} />
      <div className="flex items-center justify-between gap-4 px-7 py-5">
        <h2 className="font-lato text-[22px] font-bold leading-tight text-navy">
          {entry.service}
        </h2>
        <span className="inline-flex flex-shrink-0 items-center gap-1.5 text-[14px] font-semibold text-navy/60 transition-colors group-hover:text-navy">
          Les mer
          <ArrowUpRight
            className={`h-5 w-5 text-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${COLORS[entry.service].arrow}`}
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

function ReviewCard({ review, showTag }: { review: Review; showTag: boolean }) {
  return (
    <figure className="flex flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)]">
      {showTag && (
        <span
          className={`mb-4 self-start rounded-full px-3 py-1 text-[12px] font-semibold text-navy ${COLORS[review.service].soft}`}
        >
          {review.service}
        </span>
      )}
      {review.pullQuote ? (
        <p className="font-lato text-[20px] font-bold leading-snug text-navy">
          «{review.pullQuote}»
        </p>
      ) : (
        <Quote
          className="h-6 w-6 rotate-180 text-amber"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
      <blockquote className="mt-4 text-[15px] leading-relaxed text-navy/75">
        {review.text}
      </blockquote>
      <figcaption className="mt-6 border-t border-navy/10 pt-4">
        <p className="text-[15px] font-semibold text-navy">{review.name}</p>
        <p className="mt-0.5 text-[13px] text-navy/55">{review.company}</p>
      </figcaption>
    </figure>
  );
}

export function ReferanserPage() {
  useDocumentMeta(
    "Referanser",
    "Se hva våre kunder mener om oss."
  );

  const [filter, setFilter] = useState<Service | "Alle">("Alle");

  /* Arriving from a review card on the home page (/referanser#referanse-…):
     scroll that review into view. */
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ block: "center" });
  }, [hash]);

  const shown = SERVICES.filter(
    (s) => filter === "Alle" || s.service === filter
  );

  const chip =
    "inline-flex items-center gap-2 rounded-[1rem] border px-4 py-2 text-[14px] font-semibold transition-colors";

  return (
    <div className="min-h-dvh bg-white">
      <PageHeader
        title="Se hva våre kunder mener om oss"
        intro="Vi har mange fornøyde kunder som har benyttet våre tjenester. Her kan du lese noen av deres erfaringer med oss, og se hvordan vi har bidratt til å skape et bedre arbeidsmiljø og økt trivsel på arbeidsplassen."
      />

      <section className="relative isolate overflow-hidden bg-stone py-12 lg:py-16">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-16 top-6 w-40 rotate-[11deg] bg-brand/10 lg:-right-8 lg:w-56"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <div
            role="group"
            aria-label="Filtrer referanser etter tjeneste"
            className="flex flex-wrap gap-2.5"
          >
            {(["Alle", ...SERVICES.map((s) => s.service)] as const).map(
              (name) => {
                const count =
                  name === "Alle"
                    ? reviews.length
                    : reviews.filter((r) => r.service === name).length;
                const on = filter === name;
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setFilter(name)}
                    className={
                      chip +
                      " " +
                      (on
                        ? "border-navy bg-navy text-white"
                        : "border-navy/15 bg-white text-navy hover:border-brand hover:text-brand")
                    }
                  >
                    {name}
                    <span className={on ? "text-white/60" : "text-navy/40"}>
                      {count}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* Masonry wall: each service opens with its photo, followed by its quotes. */}
          <div className="mt-8 gap-6 sm:columns-2 lg:columns-3">
            {shown.map((entry) => (
              <div key={entry.service} className="contents">
                <div className="mb-6 break-inside-avoid">
                  <ServiceTile entry={entry} />
                </div>
                {reviews
                  .filter((r) => r.service === entry.service)
                  .map((review) => (
                    <div
                      key={review.name}
                      id={reviewId(review)}
                      className="mb-6 scroll-mt-28 break-inside-avoid"
                    >
                      <ReviewCard review={review} showTag={filter === "Alle"} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
