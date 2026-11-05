import { ReactNode, useEffect, useId, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Download, Image as ImageIcon, Phone, Play, Plus } from "lucide-react";
import { Link } from "react-router";
import { BrushUnderline, CONTAINER, ENTER_DESKTOP, FADE_DESKTOP, LinePiece, Pill } from "./site";
import { useDocumentMeta } from "../../lib/use-document-meta";
import { Reveal } from "./Reveal";

export const allServices = [
  { label: "Lunsj", to: "/tjenester/lunsj" },
  { label: "Kantine", to: "/tjenester/kantine" },
  { label: "Frukt", to: "/tjenester/frukt" },
  { label: "Catering", to: "/tjenester/catering" },
  { label: "Inneklima", to: "/tjenester/inneklima" },
  { label: "Renhold", to: "/tjenester/renhold" },
];

/* Shared by the hero and the explainer so their right-hand photos always
   have the same width. */
const PHOTO_SPLIT =
  "lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] xl:gap-20";
/* Same split mirrored, for a photo on the left. */
const PHOTO_SPLIT_LEFT =
  "lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] xl:gap-20";
const PHOTO_COL =
  "mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none";

/** Small breadcrumb trail, e.g. Alle tjenester / Frukt / Jobbsmoothie */
export function Breadcrumb({
  items,
  onDark = false,
}: {
  items: { label: string; to?: string }[];
  onDark?: boolean;
}) {
  return (
    <nav
      aria-label="Brødsmulesti"
      className="mb-5 flex flex-wrap items-center gap-1.5 text-[13px]"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight
              className={"h-3.5 w-3.5 " + (onDark ? "text-white/40" : "text-navy/30")}
              aria-hidden="true"
            />
          )}
          {item.to ? (
            <Link
              to={item.to}
              className={
                onDark
                  ? "text-white/60 transition-colors hover:text-white"
                  : "text-navy/55 transition-colors hover:text-brand"
              }
            >
              {item.label}
            </Link>
          ) : (
            <span className={"font-semibold " + (onDark ? "text-white" : "text-navy")}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function Head({ title, proof }: { title: string; proof?: string }) {
  return (
    <div className="max-w-[46rem]">
      <h2 className="font-lato text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]">
        {title}
      </h2>
      {proof && (
        <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-navy/60">
          {proof}
        </p>
      )}
    </div>
  );
}

export function ServiceFooter({
  currentPath,
  ground = "white",
}: {
  currentPath: string;
  ground?: "white" | "sky";
}) {
  const others = allServices.filter((s) => s.to !== currentPath);
  const sky = ground === "sky";

  return (
    <section
      className={
        "relative isolate overflow-hidden " +
        (sky ? "bg-stone border-y border-navy/[0.06] py-[4.5rem] lg:py-[6rem]" : "bg-white py-16 lg:py-20")
      }
    >

      <Reveal className={`${CONTAINER} relative z-10`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="h2-plain font-payoff text-[32px] font-bold leading-[1.1] text-navy sm:text-[40px] lg:text-[48px]">
              Bli{" "}
              <BrushUnderline className="text-navy">Helt Opplagt!</BrushUnderline>
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-shrink-0 sm:flex-row sm:items-center">
            <Pill to="/kontakt">
              Kontakt oss
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
            <a
              href="tel:+4702346"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4 text-brand" strokeWidth={2.5} aria-hidden="true" />
              02346
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-navy/10 pt-9">
          <h3 className="text-[16px] font-semibold text-navy">
            Andre tjenester
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className={
                  "group flex items-center justify-between gap-3 rounded-[1.25rem] bg-white px-5 py-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(13,43,64,0.18)] " +
                  (sky
                    ? "shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
                    : "border border-navy/10")
                }
              >
                <span className="text-[15px] font-semibold text-navy transition-colors group-hover:text-brand">
                  {s.label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 flex-shrink-0 text-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  strokeWidth={2.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Content blocks for sub-service pages, mirroring heltopplagt.no */
export type ContentBlock =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "bullets"; heading?: string; items: string[] }
  | { type: "image"; src: string; alt?: string }
  /** `head`: the first row is a bold header row, e.g. model names. */
  | { type: "table"; heading?: string; rows: string[][]; head?: boolean; footnote?: string }
  /** Packages side by side, each with a price and a checklist of what is in it. */
  | {
    type: "packages";
    heading?: string;
    /** `note`: one line under the checklist, e.g. who the package suits.
        `image`: a photo down the left side of the card. */
    items: { name: string; price: string; points: string[]; note?: string; image?: string }[];
  }
  /** Text beside a photo collage, full width. `reverse` puts the photos on
      the left on desktop, so consecutive sections can zigzag. */
  | {
    type: "media";
    kicker?: string;
    heading: string;
    paragraphs: string[];
    /** A short highlighted line, e.g. "Fra 500,- pr hode". */
    badge?: string;
    /** `position` is a CSS object-position, e.g. "50% 30%" to keep a face in a crop. */
    images: { src: string; alt: string; position?: string }[];
    reverse?: boolean;
  }
  /** Menu with prices: products with a photo show as photo cards, the rest
      as a plain price list under them. */
  | {
    type: "products";
    heading?: string;
    items: { name: string; allergens?: string; price: string; image?: string }[];
    footnote?: string;
  }
  | {
    type: "cards";
    heading?: string;
    items: { title: string; description?: string; image?: string }[];
  }
  /** External link, e.g. "Se produktet hos produsenten" on product pages. */
  | { type: "link"; label: string; href: string };

export interface SubService {
  /** URL slug, e.g. "fruktkurv" → /tjenester/frukt/fruktkurv */
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Relatedness group ("Produkter" / "Artikler"): the "Mer innen …" grid only shows siblings of the same group. */
  group?: string;
  /** Variant-set id ("fruktkurver", "lunsjesker"): sub-pages sharing it get a thumbnail switcher. */
  variantOf?: string;
  /** Short price line, shown on the sub-page header and switcher thumbs. */
  priceNote?: string;
  /** Page content copied from heltopplagt.no */
  content?: ContentBlock[];
}

export interface HeroPoint {
  label: string;
  body?: string;
  icon?: LucideIcon;
}

/** One benefit: a short label, one supporting line, one icon. */
export interface BenefitItem {
  label: string;
  body?: string;
  icon?: LucideIcon;
}

export interface Explainer {
  heading?: string;
  /** One or two short paragraphs. Never more. */
  body: string[];
  /** Short checked lines: how it works, one fact each. */
  points?: string[];
  image: string;
  imageAlt: string;
  /** A YouTube film about the service. A Bilde / Video tab switch sits
      above the photo; the player only loads once someone picks Video. */
  video?: {
    youtubeId: string;
    start?: number;
    title: string;
    length?: string;
    /** Tab names, e.g. "Lunsj" / "Møt oss". Default Bilde / Video. */
    photoTab?: string;
    videoTab?: string;
  };
}

/** The explainer photo with a photo / video tab switch above it, so it is
    plain that there is a film to watch. Nothing is loaded from YouTube (and
    no cookies set) until the visitor picks the video tab; then the privacy-enhanced
    player takes the photo's place in the same frame and starts playing.
    Going back to the photo tab removes the player, which stops the film. */
function ExplainerMedia({ image, imageAlt, video }: Pick<Explainer, "image" | "imageAlt"> & { video: NonNullable<Explainer["video"]> }) {
  const [tab, setTab] = useState<"bilde" | "video">("bilde");
  const panelId = useId();
  const params = new URLSearchParams({ autoplay: "1", rel: "0", modestbranding: "1" });
  if (video.start) params.set("start", String(video.start));
  const tabClass = (active: boolean) =>
    "inline-flex items-center gap-2 rounded-[0.75rem] px-4 py-2 text-[14px] font-semibold transition-colors " +
    (active ? "bg-white text-navy shadow-[0_2px_8px_-2px_rgba(13,43,64,0.18)]" : "text-navy/60 hover:text-navy");
  return (
    <div>
      <div role="tablist" aria-label="Vis bilde eller video" className="mb-4 inline-flex rounded-[1rem] bg-stone p-1">
        <button type="button" role="tab" aria-selected={tab === "bilde"} aria-controls={panelId} onClick={() => setTab("bilde")} className={tabClass(tab === "bilde")}>
          <ImageIcon className="h-4 w-4" strokeWidth={1.75} />
          {video.photoTab ?? "Bilde"}
        </button>
        <button type="button" role="tab" aria-selected={tab === "video"} aria-controls={panelId} onClick={() => setTab("video")} className={tabClass(tab === "video")}>
          <Play className="h-4 w-4" strokeWidth={1.75} />
          {video.videoTab ?? "Video"}
          {video.length && <span className="font-normal text-navy/50">{video.length}</span>}
        </button>
      </div>
      <div id={panelId} role="tabpanel" className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-navy">
        {tab === "video" ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?${params}`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

/** One entry in the "Les mer" section at the foot of the page. */
export interface ReadMoreLink {
  label: string;
  description?: string;
  to: string;
  image?: string;
}

/** Why this service pays off. The page's main argument. */
export interface BenefitBand {
  heading: string;
  proof?: string;
  items: BenefitItem[];
}

/** One expandable question at the foot of the page. */
export interface FaqItem {
  question: string;
  answer: ReactNode;
}

/** One product in a catalog section, e.g. a single fruit basket. */
export interface CatalogItem {
  name: string;
  description: string;
  /** White-background product cut-out; rendered with mix-blend-multiply so the white drops out. */
  image?: string;
  /** Small tag carried over from the printed brochure, e.g. "Populær". */
  tag?: string;
  /** Price from the brochure, e.g. "fra 395,- per person". Shown under the name. */
  price?: string;
  /** One short checked fact under the description, e.g. "Ny kurv hver uke". */
  spec?: string;
  /** Optional link target: the whole card becomes a link with a "Les mer" arrow. */
  to?: string;
}

export interface CatalogSection {
  heading: string;
  proof?: string;
  /** The brochure's emphasised one-liner under the lede. */
  note?: string;
  items: CatalogItem[];
  /** "panels" = text-only panels, "grid" = product cards, "band" = one wide row, "feature" = copy + one photo. */
  layout?: "panels" | "grid" | "band" | "feature";
  /** true = real photographs (object-cover). Default false = white-background cut-outs (mix-blend-multiply). */
  photo?: boolean;
  link?: { label: string; to: string };
  /** A short name/price list under the items, e.g. Møteservice "Enkeltvis". */
  priceList?: { heading: string; rows: [name: string, price: string][] };
  /** A button on the right of the heading, e.g. "Se alle våre kurver". */
  headerLink?: { label: string; to: string };
}

export interface ServicePageData {
  /** Category badge, e.g. "Helse & Trivsel". Retained for sub-page context. */
  badge: string;
  title: ReactNode;
  /** Short bold line between the headline and the lede, e.g. "Fersk frukt på kontoret. Levert daglig." */
  subtitle?: string;
  intro: string;
  /** Card/thumbnail image. Also the opening photo when `heroImage` is absent. */
  image: string;
  imageAlt: string;
  /** Full-bleed opening photograph — the service as it arrives at the customer. */
  heroImage?: string;
  /** Link to brochure PDF, shown as a secondary action in the opening panel */
  brochureUrl?: string;
  /** The promise strip directly under the hero. Three or four points. */
  heroPoints?: HeroPoint[];
  /** Plain-language "what this is", copy left and photo right. Renders first. */
  explainer?: Explainer;
  /** "Les mer" links at the foot of the page: deeper reading on this service. */
  readMore?: ReadMoreLink[];
  readMoreHeading?: string;
  /** Short brand statement closing the page. */
  closingStatement?: string;
  benefits?: BenefitBand;
  /** Product catalogs from the brochure. Render first, right under the hero. */
  catalogs?: CatalogSection[];
  /** Link out of the "Slik jobber vi" section, e.g. to a routines sub-page. */
  processLink?: { label: string; to: string };
  /** Suppress the sub-service card grid when catalogs already cover it. */
  hideSubServiceCards?: boolean;
  /** "light" = hero points shown at the foot of the explainer instead of in their own strip under the hero. */
  layout?: "classic" | "light";
  /** Expandable questions, rendered as the last content section. */
  faq?: FaqItem[];
  faqHeading?: string;
  faqProof?: string;
  subServicesHeading?: string;
  subServicesProof?: string;
  /** Sub-service cards, mirroring the structure of heltopplagt.no */
  subServices: SubService[];
  quote?: { text: string; name: string; role: string; company?: string };
  /** Path of this page, used as base for sub-service links */
  path: string;
}

function SubServiceCard({ to, sub }: { to: string; sub: SubService }) {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-12px_rgba(13,43,64,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={sub.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-lato text-[20px] font-bold text-navy sm:text-[22px]">
          {sub.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy/60">
          {sub.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
          Les mer
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </span>
      </div>
    </Link>
  );
}

/** `reverse` = "feature" photo on the left. Set by ServicePage so the photo
    sections zigzag down the page. */
function CatalogSectionView({
  catalog,
  reverse = false,
}: {
  catalog: CatalogSection;
  reverse?: boolean;
}) {
  if (catalog.layout === "feature") {
    const item = catalog.items[0];
    return (
      <div
        className={
          reverse
            ? "grid items-center gap-10 lg:grid-cols-[42%_1fr] lg:gap-16"
            : "grid items-center gap-10 lg:grid-cols-[1fr_42%] lg:gap-16"
        }
      >
        <div className={reverse ? "lg:order-last" : undefined}>
          <h2 className="max-w-[20ch] font-lato text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]">
            {catalog.heading}
          </h2>
          {catalog.proof && (
            <p className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-navy/70">
              {catalog.proof}
            </p>
          )}
          {item && (
            <p className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-navy/70">
              {item.description}
            </p>
          )}
          {catalog.link && (
            <div className="mt-8">
              {/^https?:/.test(catalog.link.to) ? (
                <Pill
                  href={catalog.link.to}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {catalog.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Pill>
              ) : (
                <Pill to={catalog.link.to} variant="outline">
                  {catalog.link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Pill>
              )}
            </div>
          )}
        </div>

        {item?.image && (
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {catalog.headerLink ? (
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <Head title={catalog.heading} proof={catalog.proof} />
          <Pill to={catalog.headerLink.to} variant="outline" className="flex-shrink-0 self-start sm:self-end">
            {catalog.headerLink.label}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Pill>
        </div>
      ) : (
        <Head title={catalog.heading} proof={catalog.proof} />
      )}

      {catalog.note && (
        <p className="mt-5 max-w-[70ch] text-[15px] font-semibold text-brand">
          {catalog.note}
        </p>
      )}

      {catalog.layout === "panels" ? (
        /* Three across; more than three wrap with the last row centred. */
        <div className="mt-9 flex flex-wrap justify-center gap-5">
          {catalog.items.map((item) => (
            <div
              key={item.name}
              className={
                "flex w-full flex-col items-center rounded-[1.5rem] bg-white px-6 py-9 text-center shadow-[0_1px_2px_rgba(13,43,64,0.06)] " +
                (catalog.items.length > 3
                  ? "sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                  : "sm:w-[calc((100%-2.5rem)/3)]")
              }
            >
              <h3 className="font-lato text-[20px] font-bold leading-tight text-navy">
                {item.name}
              </h3>
              {item.price && (
                <p className="mt-2 text-[15px] font-semibold text-brand">{item.price}</p>
              )}
              <p className="mt-3.5 max-w-[34ch] text-[15px] leading-relaxed text-navy/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ) : catalog.layout === "band" ? (
        <div className="mt-9 flex flex-col gap-5">
          {catalog.items.map((item) => {
            const inner = (
              <>
                <div className="relative isolate aspect-[4/3] overflow-hidden bg-white sm:aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className={
                      catalog.photo
                        ? "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        : "absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply"
                    }
                  />
                </div>
                <div className="p-6 sm:py-7 sm:pl-6 sm:pr-8">
                  {item.tag && (
                    <span className="mb-3 inline-flex rounded-full bg-amber/15 px-3.5 py-1 text-[12px] font-semibold text-navy">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="font-lato text-[20px] font-bold leading-tight text-navy">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 max-w-[58ch] text-[15px] leading-relaxed text-navy/65">
                    {item.description}
                  </p>
                  {item.to && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                      Les mer
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </span>
                  )}
                </div>
              </>
            );
            return item.to ? (
              <Link
                key={item.name}
                to={item.to}
                className="group grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.14)] sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={item.name}
                className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center"
              >
                {inner}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.items.map((item) => {
            const inner = (
              <>
                {item.image && (
                  <div className="relative isolate h-44 overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className={
                        catalog.photo
                          ? "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          : "absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply"
                      }
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  {item.tag && (
                    <span className="mb-3 inline-flex rounded-full bg-amber/15 px-3.5 py-1 text-[12px] font-semibold text-navy">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="font-lato text-[19px] font-bold leading-tight text-navy">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-navy/65">
                    {item.description}
                  </p>
                  {item.spec && (
                    <p className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy">
                      <Check
                        className="h-3.5 w-3.5 flex-shrink-0 text-lime"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      {item.spec}
                    </p>
                  )}
                  {item.to && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                      Les mer
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </span>
                  )}
                </div>
              </>
            );
            return item.to ? (
              <Link
                key={item.name}
                to={item.to}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.14)]"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={item.name}
                className="flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
              >
                {inner}
              </div>
            );
          })}
        </div>
      )}

      {catalog.priceList && (
        <div className="mx-auto mt-5 max-w-[46rem] rounded-[1.5rem] bg-white px-6 py-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)] sm:px-9">
          <h3 className="text-center font-lato text-[20px] font-bold leading-tight text-navy">
            {catalog.priceList.heading}
          </h3>
          <dl className="mt-5 divide-y divide-navy/[0.07]">
            {catalog.priceList.rows.map(([name, price]) => (
              <div key={name} className="flex items-baseline justify-between gap-6 py-2.5 text-[15px]">
                <dt className="text-navy/75">{name}</dt>
                <dd className="whitespace-nowrap font-semibold text-navy">{price}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {catalog.link && (
        <div className="mt-8">
          <Pill to={catalog.link.to} variant="outline">
            {catalog.link.label}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Pill>
        </div>
      )}
    </>
  );
}

/** Three claims on one line when they fit, otherwise one per line. */
function HeroPointStrip({ points }: { points: HeroPoint[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    const GAP = 40;
    function measure() {
      if (!list) return;
      const items = Array.from(list.children) as HTMLElement[];
      const total =
        items.reduce((sum, el) => sum + el.offsetWidth, 0) +
        GAP * (items.length - 1);
      setStacked(total > list.clientWidth + 1);
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className={
        "flex border-t border-navy/10 pt-8 " +
        (stacked
          ? "flex-col items-start gap-y-4 lg:gap-y-5"
          : "flex-row flex-wrap gap-x-10 gap-y-5")
      }
    >
      {points.map((point) => {
        const Icon = point.icon ?? Check;
        return (
          <li key={point.label} className="flex items-center gap-3.5">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white">
              <Icon className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="font-lato text-[17px] font-bold leading-snug text-navy lg:whitespace-nowrap lg:text-[clamp(15px,1.2vw,18px)]">
              {point.label}
              {point.body && (
                <span className="mt-1.5 block font-sans text-[14px] font-normal leading-relaxed text-navy/60">
                  {point.body}
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function BenefitGrid({ items }: { items: BenefitItem[] }) {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon ?? Check;
        return (
          <li key={item.label}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10">
              <Icon
                className="h-5 w-5 text-brand"
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>
            <h3 className="mt-4 text-[16px] font-semibold leading-tight text-navy">
              {item.label}
            </h3>
            {item.body && (
              <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-navy/60">
                {item.body}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ReadMoreList({ links }: { links: ReadMoreLink[] }) {
  return (
    <div className="mt-9 max-w-[900px]">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="group flex items-center gap-6 border-b border-navy/10 py-5 first:border-t first:border-navy/10"
        >
          {link.image && (
            <span className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-[0.75rem] sm:h-20 sm:w-20">
              <img
                src={link.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
          )}
          <span className="min-w-0 flex-1">
            <span className="block text-[16px] font-semibold leading-snug text-navy transition-colors group-hover:text-brand">
              {link.label}
            </span>
            {link.description && (
              <span className="mt-1 block text-[15px] leading-relaxed text-navy/60">
                {link.description}
              </span>
            )}
          </span>
          <ArrowUpRight
            className="h-5 w-5 flex-shrink-0 text-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: FaqItem[] }) {
  /* A shared `name` makes the <details> exclusive: opening one closes the rest. */
  const group = useId();
  return (
    <div className="mt-10 max-w-[900px]">
      {items.map((item, i) => (
        <details
          key={i}
          name={group}
          className="faq-item group border-b border-navy/10 first:border-t first:border-navy/10"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[16px] font-semibold leading-snug text-navy transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <Plus
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </summary>
          <div className="max-w-[68ch] pb-6 text-[15px] leading-relaxed text-navy/70">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const serviceLabel =
    allServices.find((s) => s.to === data.path)?.label ?? data.badge;

  useDocumentMeta(data.subtitle ?? serviceLabel, data.intro);

  const lowerLabel = serviceLabel.toLowerCase();

  const light = data.layout === "light";
  const hasPoints = !!data.heroPoints && data.heroPoints.length > 0;

  /* "photo" = copy + photo side by side, "cards" = a grid of cards,
     "plain" = text, lists, FAQ. Card grids get their own inset panel. */
  const blocks: { node: ReactNode; kind: "photo" | "cards" | "plain" }[] = [];

  if (data.explainer) {
    const ex = data.explainer;
    blocks.push({ kind: "photo", node: (
      <>
        <div className={`grid items-center gap-10 ${PHOTO_SPLIT_LEFT}`}>
          {/* A film gets the full column on phones too; photos stay capped. */}
          <div className={ex.video ? "w-full" : PHOTO_COL}>
            {ex.video ? (
              <ExplainerMedia image={ex.image} imageAlt={ex.imageAlt} video={ex.video} />
            ) : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <img
                src={ex.image}
                alt={ex.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            )}
          </div>

          <div>
            <h2 className="max-w-[20ch] font-lato text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]">
              {ex.heading ?? "Hva tilbyr vi"}
            </h2>
            {ex.body.map((p, n) => (
              <p
                key={n}
                className="mt-5 max-w-[54ch] whitespace-pre-line text-[16px] leading-relaxed text-navy/70"
              >
                {p}
              </p>
            ))}
            {ex.points && ex.points.length > 0 && (
              <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {ex.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime/15">
                      <Check
                        className="h-3.5 w-3.5 text-lime"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[15px] leading-relaxed text-navy/75">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Hero point strip hidden for now.
        {light && hasPoints && (
          <div className="mt-14 lg:mt-16">
            <HeroPointStrip points={data.heroPoints!} />
          </div>
        )}
        */}
      </>
    ) });
  }

  if (data.benefits) {
    blocks.push({ kind: "plain", node: (
      <>
        <Head title={data.benefits.heading} proof={data.benefits.proof} />
        <BenefitGrid items={data.benefits.items} />
      </>
    ) });
  }

  /* Photo sections zigzag: the hero photo is on the right, so the explainer
     (photo section 0) goes left, then right, left, and so on. */
  let photoSection = data.explainer ? 1 : 0;
  (data.catalogs ?? []).forEach((catalog) => {
    const feature = catalog.layout === "feature";
    const reverse = feature && photoSection % 2 === 0;
    if (feature) photoSection++;
    blocks.push({
      kind: feature ? "photo" : "cards",
      node: <CatalogSectionView catalog={catalog} reverse={reverse} />,
    });
  });

  if (data.subServices.length > 0 && !data.hideSubServiceCards) {
    blocks.push({ kind: "cards", node: (
      <>
        <Head
          title={data.subServicesHeading ?? `Dette leverer vi innen ${lowerLabel}`}
          proof={data.subServicesProof}
        />
        <div
          className={
            "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" +
            (data.subServices.length > 2 ? " lg:grid-cols-3" : "")
          }
        >
          {data.subServices.map((sub) => (
            <SubServiceCard
              key={sub.slug}
              to={`${data.path}/${sub.slug}`}
              sub={sub}
            />
          ))}
        </div>
      </>
    ) });
  }

  if (data.quote) {
    blocks.push({ kind: "plain", node: (
      <figure className="mx-auto max-w-[820px] text-center">
        <blockquote className="font-lato text-[22px] font-light leading-[1.4] text-navy sm:text-[26px]">
          <span aria-hidden="true" className="text-amber">
            &ldquo;
          </span>
          {data.quote.text}
          <span aria-hidden="true" className="text-amber">
            &rdquo;
          </span>
        </blockquote>
        <figcaption className="mt-7 text-[15px] leading-relaxed">
          <span className="font-semibold text-navy">{data.quote.name}</span>
          <span className="block text-navy/55">
            {data.quote.role}
            {data.quote.company ? `, ${data.quote.company}` : ""}
          </span>
        </figcaption>
      </figure>
    ) });
  }

  if (data.faq && data.faq.length > 0) {
    blocks.push({ kind: "plain", node: (
      <>
        <Head
          title={data.faqHeading ?? "Ofte stilte spørsmål"}
          proof={data.faqProof}
        />
        <FaqList items={data.faq} />
      </>
    ) });
  }

  if (data.readMore && data.readMore.length > 0) {
    blocks.push({ kind: "plain", node: (
      <>
        <Head title={data.readMoreHeading ?? "Les mer"} />
        <ReadMoreList links={data.readMore} />
      </>
    ) });
  }

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden text-navy">
        <LinePiece className={`${FADE_DESKTOP} [transition-delay:150ms] hidden lg:block -right-40 top-10 w-[34rem] rotate-[14deg] text-brand/30 lg:-right-32 lg:top-6 lg:w-[46rem]`} />
        <div
          className={`${CONTAINER} relative z-10 grid gap-10 py-10 sm:py-12 lg:min-h-[36rem] lg:items-center lg:py-16 xl:min-h-[40rem] ${PHOTO_SPLIT}`}
        >
          <div className="order-2 lg:order-1 lg:self-end lg:pb-2">
            <div className={`${ENTER_DESKTOP} [transition-delay:100ms]`}>
              <Breadcrumb
                items={[
                  { label: "Alle tjenester", to: "/tjenester" },
                  { label: serviceLabel },
                ]}
              />
            </div>

            <h1 className={`font-lato text-[38px] font-light leading-[1.05] tracking-[-0.01em] text-navy sm:text-[48px] lg:text-[56px] xl:text-[64px] ${ENTER_DESKTOP} [transition-delay:180ms]`}>
              {data.title}
            </h1>

            {data.subtitle && (
              <p className={`service-subtitle mt-5 text-navy ${ENTER_DESKTOP} [transition-delay:260ms]`}>
                {data.subtitle}
              </p>
            )}

            <p className={`mt-5 max-w-[36rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px] ${ENTER_DESKTOP} [transition-delay:340ms]`}>
              {data.intro}
            </p>

            <div className={`mt-8 flex flex-col gap-3 sm:flex-row xl:mt-10 ${ENTER_DESKTOP} [transition-delay:420ms]`}>
              <Pill to="/kontakt">
                Ta kontakt for tilbud
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Pill>
              {data.brochureUrl && (
                <Pill
                  href={data.brochureUrl}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" strokeWidth={2.5} />
                  Brosjyre
                </Pill>
              )}
            </div>
          </div>

          <div className={`order-1 lg:order-2 ${FADE_DESKTOP} ${PHOTO_COL}`}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 overflow-hidden rounded-[0.875rem]">
                <img
                  src={data.heroImage ?? data.image}
                  alt={data.imageAlt}
                  /* The page's LCP element: never lazy, and ahead of the grid
                     photos. Lowercase because React 18 does not recognise the
                     camelCase `fetchPriority` prop and drops it with a warning. */
                  fetchpriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue, desktop only. */}
        <a
          href="#innhold"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("innhold")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="absolute bottom-10 right-8 z-10 hidden flex-col items-center gap-3 text-navy/55 transition-colors hover:text-brand lg:flex"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] [writing-mode:vertical-rl] rotate-180">
            Les mer
          </span>
          <span aria-hidden="true" className="h-14 w-px bg-current" />
          <ArrowDown className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </a>
      </section>

      <div id="innhold" className="scroll-mt-20" />

      {/* Hero point strip hidden for now.
      {hasPoints && !(light && data.explainer) && (
        <section className="bg-white py-10 lg:py-12">
          <Reveal className={CONTAINER}>
            <HeroPointStrip points={data.heroPoints} />
          </Reveal>
        </section>
      )}
      */}

      {blocks.map(({ node, kind }, i) => (
        <section
          key={i}
          className={
            "relative isolate overflow-x-clip py-14 lg:py-24 " +
            (i === 0 ? "lg:pt-12" : "")
          }
        >
          {/* One big line piece near the end of the page; the hero has the other. */}
          {i === blocks.length - 2 && i > 0 && (
            <LinePiece className="hidden lg:block -right-56 -top-24 w-[36rem] rotate-[24deg] text-navy/[0.12] lg:-right-48 lg:w-[50rem]" />
          )}
          <div className={CONTAINER}>
            <Reveal>
              {kind === "cards" ? (
                <div className="relative rounded-[2rem] bg-stone px-5 py-12 sm:px-10 lg:px-14 lg:py-16">
                  {/* One solid piece per page, hung off the lower corner of
                      the first card panel, clear of the heading and cards. */}
                  {i === blocks.findIndex((b) => b.kind === "cards") && (
                    <span
                      aria-hidden="true"
                      className="livery-puzzle aspect-[100/129] -bottom-16 -left-12 w-28 -rotate-[16deg] bg-brand lg:-left-20 lg:w-32"
                    />
                  )}
                  {node}
                </div>
              ) : (
                node
              )}
            </Reveal>
          </div>
        </section>
      ))}

      <ServiceFooter currentPath={data.path} ground="sky" />
    </div>
  );
}
