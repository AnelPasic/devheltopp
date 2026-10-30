import { ReactNode, useEffect, useId, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Download, Phone, Plus } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Pill } from "./site";
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

const MOTIFS = [
  "livery-puzzle-outline aspect-[100/129] -right-12 -bottom-10 w-40 rotate-[22deg] bg-brand/25 lg:-right-6 lg:w-56",
  "livery-puzzle aspect-[100/129] -right-20 top-10 w-48 rotate-[9deg] bg-lime/15 lg:-right-12 lg:w-64",
  "livery-puzzle-outline aspect-[100/129] -left-14 -bottom-8 w-36 -rotate-[12deg] bg-navy/20 lg:-left-8 lg:w-52",
  "livery-puzzle-outline aspect-[100/129] -right-14 top-8 w-40 rotate-[15deg] bg-brand/20 lg:-right-8 lg:w-56",
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
      {sky && (
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -right-16 -top-10 w-40 rotate-[18deg] bg-brand/20 lg:-right-8 lg:w-56"
        />
      )}

      <Reveal className={`${CONTAINER} relative z-10`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="payoff-marker font-payoff text-[30px] font-bold leading-[1.1] text-navy sm:text-[38px] lg:text-[44px]">
              Bli {" "}
              <span className="text-brand">Helt Opplagt!</span>
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
  | { type: "table"; heading?: string; rows: string[][]; footnote?: string }
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
      className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(13,43,64,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={sub.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Head title={catalog.heading} proof={catalog.proof} />

      {catalog.note && (
        <p className="mt-5 max-w-[70ch] text-[15px] font-semibold text-brand">
          {catalog.note}
        </p>
      )}

      {catalog.layout === "panels" ? (
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {catalog.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center rounded-[1.5rem] bg-white px-6 py-9 text-center shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
            >
              <h3 className="font-lato text-[20px] font-bold leading-tight text-navy">
                {item.name}
              </h3>
              <p className="mt-3.5 max-w-[30ch] text-[15px] leading-relaxed text-navy/65">
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
                          ? "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
            <span className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-[1rem] sm:h-20 sm:w-20">
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
          className="group border-b border-navy/10 first:border-t first:border-navy/10"
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

  const blocks: ReactNode[] = [];

  if (data.explainer) {
    const ex = data.explainer;
    blocks.push(
      <>
        <div className={`grid items-center gap-10 ${PHOTO_SPLIT_LEFT}`}>
          <div className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] ${PHOTO_COL}`}>
            <img
              src={ex.image}
              alt={ex.imageAlt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="max-w-[20ch] font-lato text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]">
              {ex.heading ?? "Hva tilbyr vi"}
            </h2>
            {ex.body.map((p, n) => (
              <p
                key={n}
                className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-navy/70"
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
    );
  }

  if (data.benefits) {
    blocks.push(
      <>
        <Head title={data.benefits.heading} proof={data.benefits.proof} />
        <BenefitGrid items={data.benefits.items} />
      </>
    );
  }

  /* Photo sections zigzag: the hero photo is on the right, so the explainer
     (photo section 0) goes left, then right, left, and so on. */
  let photoSection = data.explainer ? 1 : 0;
  (data.catalogs ?? []).forEach((catalog) => {
    const reverse = catalog.layout === "feature" && photoSection % 2 === 0;
    if (catalog.layout === "feature") photoSection++;
    blocks.push(<CatalogSectionView catalog={catalog} reverse={reverse} />);
  });

  if (data.subServices.length > 0 && !data.hideSubServiceCards) {
    blocks.push(
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
    );
  }

  if (data.quote) {
    blocks.push(
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
    );
  }

  if (data.faq && data.faq.length > 0) {
    blocks.push(
      <>
        <Head
          title={data.faqHeading ?? "Ofte stilte spørsmål"}
          proof={data.faqProof}
        />
        <FaqList items={data.faq} />
      </>
    );
  }

  if (data.readMore && data.readMore.length > 0) {
    blocks.push(
      <>
        <Head title={data.readMoreHeading ?? "Les mer"} />
        <ReadMoreList links={data.readMore} />
      </>
    );
  }

  /* Grounds alternate. The hero is stone and the hero point strip is hidden,
     so the first block goes white to keep it apart from the hero.
     (With the strip shown: `light ? 1 : 0`.) */
  const groundOffset = 1;
  const otherServicesGround =
    (blocks.length + groundOffset) % 2 === 0 ? "sky" : "white";

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-stone border-b border-navy/[0.06] text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -left-20 bottom-[-3rem] w-44 -rotate-[14deg] bg-brand/15 lg:-left-12 lg:w-64"
        />
        <div
          className={`${CONTAINER} relative z-10 grid gap-10 py-10 sm:py-12 lg:min-h-[36rem] lg:items-center lg:py-16 xl:min-h-[40rem] ${PHOTO_SPLIT}`}
        >
          <div className="order-2 lg:order-1 lg:self-end lg:pb-2">
            <Breadcrumb
              items={[
                { label: "Alle tjenester", to: "/tjenester" },
                { label: serviceLabel },
              ]}
            />

            <h1 className="font-lato text-[38px] font-light leading-[1.05] tracking-[-0.01em] text-navy sm:text-[48px] lg:text-[56px] xl:text-[64px]">
              {data.title}
            </h1>

            {data.subtitle && (
              <p className="service-subtitle mt-5 text-navy">
                {data.subtitle}
              </p>
            )}

            <p className="mt-5 max-w-[36rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
              {data.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row xl:mt-10">
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

          <div className={`order-1 lg:order-2 ${PHOTO_COL}`}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
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

      {blocks.map((block, i) => {
        const sky = (i + groundOffset) % 2 === 0;
        const motif = sky
          ? MOTIFS[Math.floor((i + groundOffset) / 2) % MOTIFS.length]
          : null;
        return (
          <section
            key={i}
            className={
              sky
                ? "relative isolate overflow-hidden bg-stone border-y border-navy/[0.06] py-[4.5rem] lg:py-[5.5rem]"
                : "bg-white py-16 lg:py-20"
            }
          >
            {motif && <span aria-hidden="true" className={motif} />}
            <Reveal className={`${CONTAINER} relative z-10`}>{block}</Reveal>
          </section>
        );
      })}

      <ServiceFooter currentPath={data.path} ground={otherServicesGround} />
    </div>
  );
}
