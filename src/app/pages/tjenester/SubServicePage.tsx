import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import {
  Breadcrumb,
  ContentBlock,
  ServiceFooter,
  ServicePageData,
} from "../../components/ServicePage";
import { VariantPage } from "../../components/VariantPage";
import { FruktkurverPage } from "./FruktkurverPage";
import { CONTAINER, ENTER_DESKTOP, FADE_DESKTOP, Kicker, Pill } from "../../components/site";
import { fruktData } from "./Frukt";
import { cateringData } from "./Catering";
import { kantineData } from "./Kantine";
import { lunsjData } from "./Lunsj";
import { inneklimaData } from "./Inneklima";
import { renholdData } from "./Renhold";
import { useDocumentMeta } from "../../../lib/use-document-meta";

const services: Record<string, { label: string; data: ServicePageData }> = {
  frukt: { label: "Frukt", data: fruktData },
  catering: { label: "Catering", data: cateringData },
  kantine: { label: "Kantine", data: kantineData },
  lunsj: { label: "Lunsj", data: lunsjData },
  inneklima: { label: "Inneklima", data: inneklimaData },
  renhold: { label: "Renhold", data: renholdData },
};

/** Accessible names for the variant switcher, per variant-set id. */
const VARIANT_LABELS: Record<string, string> = {
  fruktkurver: "Velg fruktkurv",
  lunsjesker: "Velg lunsjeske",
};

/* Pages under /tjenester/:service/ that aren't sub-services. They also have
   their own routes; this keeps them working even when the router matches
   them here instead (for example a tab still running an older route list). */
const OWN_PAGES: Record<string, () => JSX.Element> = {
  "frukt/fruktkurver": FruktkurverPage,
};

export function SubServicePage() {
  const { service, slug } = useParams<{ service: string; slug: string }>();
  const OwnPage = OWN_PAGES[`${service}/${slug}`];
  return OwnPage ? <OwnPage /> : <SubServiceDetail />;
}

function SubServiceDetail() {
  const { service, slug } = useParams<{ service: string; slug: string }>();
  const entry = service ? services[service] : undefined;
  const sub = entry?.data.subServices.find((s) => s.slug === slug);

  useDocumentMeta(
    sub ? sub.title : "Fant ikke siden",
    sub ? sub.description : "Siden du leter etter finnes ikke, eller har blitt flyttet."
  );

  if (!entry || !sub) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-white px-8 text-center">
        <h1 className="mb-4 font-lato text-3xl font-light text-navy">
          Fant ikke siden
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold text-brand"
        >
          <ArrowLeft className="h-4 w-4" />
          Til forsiden
        </Link>
      </div>
    );
  }

  const variants = sub.variantOf
    ? entry.data.subServices.filter((s) => s.variantOf === sub.variantOf)
    : [];
  const hasVariants = variants.length > 1;

  const allSiblings = entry.data.subServices.filter(
    (s) =>
      s.slug !== sub.slug && !(sub.variantOf && s.variantOf === sub.variantOf)
  );
  const siblings = (
    sub.group ? allSiblings.filter((s) => s.group === sub.group) : allSiblings
  ).slice(0, 7);
  const siblingsHeading =
    sub.group === "Produkter"
      ? "Flere produkter"
      : `Mer innen ${entry.label.toLowerCase()}`;

  /* Every sub-page opens the same way: title and intro left, the page's
     image right. Content that opens with that same photo would repeat it, so
     it is dropped from the body. */
  const showImage = Boolean(sub.image);
  const first = sub.content?.[0];
  const body =
    first?.type === "image" && first.src === sub.image
      ? sub.content!.slice(1)
      : sub.content ?? [];
  const bodyImages = body.filter((b): b is ImageBlock => b.type === "image");

  return (
    <div className="min-h-dvh bg-white">
      {/* Product variants (fruit baskets, lunch boxes) get their own detail
          layout; everything else the regular sub-page hero. */}
      {hasVariants ? (
        <VariantPage
          sub={sub}
          variants={variants}
          basePath={entry.data.path}
          serviceLabel={entry.label}
          label={VARIANT_LABELS[sub.variantOf!] ?? "Velg variant"}
        />
      ) : (
      <>
      {/* Hero: on white with generous space around it, and a fine rule
          underneath with a short brand-blue mark, so the page body has a
          clear start instead of running into the hero. */}
      <section className={`${CONTAINER} pt-10 lg:pt-16`}>
        <div
          className={
            "pb-12 lg:pb-16 " +
            (showImage
              ? "lg:grid lg:grid-cols-[1fr_minmax(0,500px)] lg:items-center lg:gap-20"
              : "")
          }
        >
          <div className={`${ENTER_DESKTOP} [transition-delay:100ms]`}>
            <Breadcrumb
              items={[
                { label: "Alle tjenester", to: "/tjenester" },
                { label: entry.label, to: entry.data.path },
                { label: sub.title },
              ]}
            />

            <h1 className="mb-4 font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[40px] lg:text-[46px]">
              {sub.title}
            </h1>

            {sub.priceNote && (
              <p className="mb-4 text-[17px] font-semibold text-brand">
                {sub.priceNote}
              </p>
            )}

            {hasVariants ? (
              <>
                {sub.content && (
                  <div className="space-y-5">
                    {sub.content.map((block, i) => (
                      <ContentBlockView key={i} block={block} />
                    ))}
                  </div>
                )}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Pill to="/kontakt">
                    Ta kontakt for tilbud
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </Pill>
                </div>
              </>
            ) : (
              <>
                {sub.description && (
                  <p className="max-w-[680px] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
                    {sub.description}
                  </p>
                )}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Pill to="/kontakt">
                    Ta kontakt for tilbud
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </Pill>
                </div>
              </>
            )}
          </div>

          {showImage && (
            <div className={`mt-9 max-w-[780px] overflow-hidden rounded-[1.25rem] ${FADE_DESKTOP} lg:mt-0`}>
              <img
                src={sub.image}
                alt={sub.title}
                className="aspect-[16/9] w-full object-cover lg:aspect-[4/3]"
              />
            </div>
          )}
        </div>
        <div aria-hidden="true" className="relative h-px bg-navy/10">
          <span className="absolute left-0 top-1/2 h-[3px] w-14 -translate-y-1/2 rounded-full bg-brand" />
        </div>
      </section>
      </>
      )}

      {!hasVariants && body.length > 0 && (
        <section className="border-b border-navy/10 bg-white pb-14 pt-14 lg:pb-20 lg:pt-20">
          {/* Text on the left. On desktop the page's photos stack in a
              right-hand column the same width as the hero photo, so they sit
              straight under it; on phones they stay in the text where they
              were. */}
          <div
            className={
              CONTAINER +
              (bodyImages.length > 0
                ? " lg:grid lg:grid-cols-[1fr_minmax(0,500px)] lg:items-start lg:gap-20"
                : "")
            }
          >
            <div className="space-y-14">
              {body.map((block, i) => (
                <div key={i} className={block.type === "image" ? "lg:hidden" : undefined}>
                  <ContentBlockView block={block} />
                </div>
              ))}
            </div>
            {bodyImages.length > 0 && (
              <div className="hidden flex-col gap-6 lg:flex">
                {bodyImages.map((image, i) => (
                  <div key={i} className="overflow-hidden rounded-[1.25rem]">
                    <img
                      src={image.src}
                      alt={image.alt ?? ""}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="bg-white py-14 lg:py-16">
          <div className={CONTAINER}>
            <Kicker>Utforsk mer</Kicker>
            <h2 className="mt-3 mb-8 font-lato text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px]">
              {siblingsHeading}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  to={`${entry.data.path}/${s.slug}`}
                  className="group flex items-center gap-3 rounded-[1.25rem] border border-navy/10 p-4 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_8px_24px_rgba(0,119,190,0.08)]"
                >
                  {s.image && (
                    <span className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-[0.4375rem] bg-white">
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </span>
                  )}
                  <span className="flex-1 text-sm font-semibold text-navy">
                    {s.title}
                  </span>
                  <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-navy/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                </Link>
              ))}
              <Link
                to={entry.data.path}
                className="group flex items-center gap-3 rounded-[1.25rem] border border-navy/10 p-4 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_8px_24px_rgba(0,119,190,0.08)]"
              >
                <span className="flex-1 text-sm font-semibold text-brand">
                  Se alt innen {entry.label.toLowerCase()}
                </span>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-brand transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <ServiceFooter currentPath={entry.data.path} />
    </div>
  );
}

type ImageBlock = Extract<ContentBlock, { type: "image" }>;
/** Turns `<a href="/path">text</a>` in copied paragraph text into router links. */
function withLinks(text: string) {
  const parts = text.split(/(<a href="[^"]+">.*?<\/a>)/);
  return parts.map((part, i) => {
    const match = part.match(/^<a href="([^"]+)">(.*?)<\/a>$/);
    if (!match) return part;
    return (
      <Link
        key={i}
        to={match[1]}
        className="font-semibold text-brand underline underline-offset-2 hover:text-brand-deep"
      >
        {match[2]}
      </Link>
    );
  });
}

function ContentBlockView({ block }: { block: ContentBlock }) {
  if (block.type === "text") {
    return (
      <div className="max-w-[780px]">
        {block.heading && (
          <h2 className="mb-4 font-lato text-[24px] font-light leading-[1.2] tracking-[-0.01em] text-navy sm:text-[28px]">
            {block.heading}
          </h2>
        )}
        <div className="space-y-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line text-[17px] leading-relaxed text-navy/70">
              {withLinks(p)}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <div className="max-w-[780px] overflow-hidden rounded-[1.25rem]">
        <img src={block.src} alt={block.alt ?? ""} className="w-full" />
      </div>
    );
  }

  if (block.type === "link") {
    const cls =
      "inline-flex items-center gap-2 rounded-[1rem] border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:border-brand/40 hover:text-brand transition-colors";
    const isExternal = /^https?:\/\//.test(block.href);
    return (
      <div>
        {isExternal ? (
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cls}
          >
            {block.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <Link to={block.href} className={cls}>
            {block.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div>
        {block.heading && (
          <h2 className="mb-5 font-lato text-[24px] font-light leading-[1.2] tracking-[-0.01em] text-navy sm:text-[28px]">
            {block.heading}
          </h2>
        )}
        {/* overflow-x-auto, not hidden: wide tables (3–4 columns) must scroll
            inside their container on small screens instead of being clipped. */}
        <div className="overflow-x-auto rounded-[1.25rem] border border-navy/10">
          <table className="w-full text-[15px]">
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-cloud/60" : "bg-white"}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 align-top text-navy/70 ${
                        j === 0 ? "font-medium text-navy" : ""
                      } ${j === row.length - 1 ? "text-right whitespace-nowrap" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.footnote && (
          <p className="mt-3 text-sm italic leading-relaxed text-navy/55">
            {block.footnote}
          </p>
        )}
      </div>
    );
  }

  if (block.type === "bullets") {
    return (
      <div className="max-w-[780px]">
        {block.heading && (
          <h2 className="mb-5 font-lato text-[24px] font-light leading-[1.2] tracking-[-0.01em] text-navy sm:text-[28px]">
            {block.heading}
          </h2>
        )}
        <ul className="space-y-3.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-lime/15">
                <Check className="h-3 w-3 text-lime" strokeWidth={3} />
              </span>
              <span className="text-[15px] leading-relaxed text-navy/70">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {block.heading && (
        <h2 className="mb-6 font-lato text-[24px] font-light leading-[1.2] tracking-[-0.01em] text-navy sm:text-[28px]">
          {block.heading}
        </h2>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] ring-1 ring-navy/10"
          >
            {item.image && (
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="mb-1.5 text-base font-bold tracking-tight text-navy">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm leading-relaxed text-navy/65">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
