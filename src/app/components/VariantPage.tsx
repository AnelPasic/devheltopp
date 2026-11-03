import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Package, Phone } from "lucide-react";
import { Breadcrumb, type ContentBlock, type SubService } from "./ServicePage";
import { CONTAINER, Kicker, Pill } from "./site";

/**
 * Detail page for one product in a set of variants: the fruit baskets
 * (Hverdagskurven, Go'kurven, ...) and the lunch boxes. Laid out like a
 * product page: the product on a soft stage with the other variants as
 * thumbnails, and name, price, description and contact beside it.
 *
 * On phones the name and price come first, then a shorter stage and one
 * scrollable row of thumbnails, so the description follows straight after.
 */

interface Props {
  sub: SubService;
  variants: SubService[];
  basePath: string;
  serviceLabel: string;
  /** e.g. "Velg fruktkurv" */
  label: string;
}

/** The product's own text, split into body and the "Leveres i ..." line. */
function textOf(sub: SubService) {
  const paras = (sub.content ?? [])
    .filter((b): b is Extract<ContentBlock, { type: "text" }> => b.type === "text")
    .flatMap((b) => b.paragraphs)
    .map((p) => p.trim())
    .filter(Boolean);
  const delivery = paras.find((p) => /^Leveres i kurver/i.test(p));
  return { body: paras.filter((p) => p !== delivery), delivery };
}

const kindOf = (sub: SubService) => (sub.variantOf === "fruktkurver" ? "Fruktkurv" : "Lunsjeske");

/* The cut-outs' background isn't pure white; a touch of brightness lets
   multiply drop it cleanly on the grey. */
const CUTOUT = "h-full w-full object-contain mix-blend-multiply brightness-[1.06]";

const ARROW =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-[0_4px_14px_-6px_rgba(13,43,64,0.25)] transition-colors hover:border-brand hover:text-brand lg:h-11 lg:w-11";

export function VariantPage({ sub, variants, basePath, serviceLabel, label }: Props) {
  const { body, delivery } = textOf(sub);
  const i = variants.findIndex((v) => v.slug === sub.slug);
  const prev = variants[(i - 1 + variants.length) % variants.length];
  const next = variants[(i + 1) % variants.length];
  const href = (v: SubService) => `${basePath}/${v.slug}`;
  /* Moving between variants is a content swap: keep the scroll position. */
  const keep = { preserveScroll: true };

  /* The other variants: one scrollable row on phones, a grid of six on
     desktop. */
  const thumbs = (
    <nav
      aria-label={label}
      className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex gap-2.5 p-0.5 lg:grid lg:grid-cols-6 lg:gap-3">
        {variants.map((v) => {
          const on = v.slug === sub.slug;
          return (
            <Link
              key={v.slug}
              to={href(v)}
              state={keep}
              aria-label={v.title}
              aria-current={on ? "page" : undefined}
              className={
                "flex aspect-square w-16 flex-shrink-0 items-center justify-center rounded-[0.75rem] bg-stone transition-shadow sm:w-20 lg:w-auto lg:rounded-[0.875rem] " +
                (on ? "ring-2 ring-brand" : "hover:ring-1 hover:ring-navy/20")
              }
            >
              <img src={v.image} alt="" loading="lazy" className={`${CUTOUT} p-1.5 lg:p-2`} />
            </Link>
          );
        })}
      </div>
    </nav>
  );

  return (
    <section className={`${CONTAINER} pb-16 pt-8 lg:pb-24 lg:pt-14`}>
      <Breadcrumb
        items={[
          { label: "Alle tjenester", to: "/tjenester" },
          { label: serviceLabel, to: basePath },
          { label: sub.title },
        ]}
      />

      {/* Phones: name, stage, text in that order (the details wrapper is
          display:contents there, so its two parts are ordered around the
          stage). Desktop: the stage on the left, name and text together in
          one column on the right that stays in view while you scroll.
          minmax(0,1fr) on phones too, so the scrollable thumbnail row can't
          stretch the column wider than the screen. */}
      <div className="mt-2 grid grid-cols-[minmax(0,1fr)] gap-x-20 gap-y-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        <div className="contents lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:block lg:self-start">
        <div className="order-1">
          <Kicker>{kindOf(sub)}</Kicker>
          <h1 className="h1-compact mt-3 font-lato font-light text-navy lg:mt-4">{sub.title}</h1>
          {sub.priceNote && (
            <p className="mt-3 text-[17px] font-semibold text-brand lg:mt-4 lg:text-[18px]">
              {sub.priceNote}
            </p>
          )}
        </div>

        <div className="order-3 lg:mt-6">
          <div className="space-y-4 border-t border-navy/10 pt-6">
            {body.map((p, n) => (
              <p key={n} className="text-[16px] leading-relaxed text-navy/70">
                {p}
              </p>
            ))}
          </div>
          {delivery && (
            <p className="mt-6 flex items-start gap-3 text-[15px] font-medium text-navy">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                <Package className="h-4 w-4 text-brand" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="pt-1">{delivery}</span>
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Pill to="/kontakt">
              Ta kontakt for tilbud
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
            <Pill href="tel:+4702346" variant="outline">
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              02346
            </Pill>
          </div>
        </div>
        </div>

        <div className="order-2 lg:col-start-1 lg:row-start-1">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] bg-stone lg:aspect-square lg:rounded-[1.75rem]">
            <img src={sub.image} alt={sub.title} className={`${CUTOUT} p-[8%] lg:p-[12%]`} />
            <div className="absolute bottom-3 right-3 flex gap-2 lg:bottom-5 lg:right-5 lg:gap-2.5">
              <Link to={href(prev)} state={keep} aria-label={`Forrige: ${prev.title}`} className={ARROW}>
                <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link to={href(next)} state={keep} aria-label={`Neste: ${next.title}`} className={ARROW}>
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* The other variants, phones: right under the photo. */}
        <div className="order-2 -mt-3 lg:hidden">{thumbs}</div>
      </div>

      {/* Desktop: the same thumbnails below the photo, in a separate grid
          with the same columns. Kept out of the grid above on purpose: a
          sticky item stops at the bottom of its grid, so this way the
          details stop at the bottom of the photo. */}
      <div className="mt-4 hidden lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-x-20">
        {thumbs}
      </div>
    </section>
  );
}
