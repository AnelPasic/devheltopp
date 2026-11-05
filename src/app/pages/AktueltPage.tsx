import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { CONTAINER } from "../components/site";
import { PageHeader } from "../components/PageHeader";
import { articleHref, articles } from "../../lib/articles";
import { useDocumentMeta } from "../../lib/use-document-meta";

export function AktueltPage() {
  useDocumentMeta(
    "Aktuelt",
    "Siste nytt fra Helt Opplagt."
  );

  const [featured, ...rest] = articles;

  return (
    <div className="min-h-dvh bg-white">
      <PageHeader title="Siste nytt fra Helt Opplagt" />

      <section className="bg-white py-16 lg:py-20">
        <div className={CONTAINER}>
          <Link to={articleHref(featured)} className="group block lg:grid lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">
                {featured.category}
              </span>
              <h2 className="mt-3 font-lato text-[26px] font-bold leading-[1.2] text-navy sm:text-[30px]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-navy/60 lg:text-[16px]">
                {featured.ingress}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                {featured.href ? "Les mer" : "Les hele saken"}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </span>
            </div>
          </Link>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to={articleHref(a)}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.14)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">
                    {a.category}
                  </span>
                  <h3 className="mt-2 font-lato text-[19px] font-bold leading-snug text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-navy/60">
                    {a.ingress}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                    Les mer
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
