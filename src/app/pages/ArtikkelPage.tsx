import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CONTAINER, Kicker, Pill } from "../components/site";
import { articleHref, articles, getArticle, type ArticleBlock } from "../../lib/articles";
import { useDocumentMeta } from "../../lib/use-document-meta";

export function ArtikkelPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  useDocumentMeta(
    article ? article.title : "Fant ikke saken",
    article ? article.ingress : "Saken du leter etter finnes ikke, eller har blitt flyttet."
  );

  if (!article) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-white px-8 text-center">
        <h1 className="font-lato text-3xl font-light text-navy">
          Fant ikke saken
        </h1>
        <Link
          to="/aktuelt"
          className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          Til Aktuelt
        </Link>
      </div>
    );
  }

  if (article.href) return <Navigate to={article.href} replace />;

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-stone border-b border-navy/[0.06] text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[14deg] bg-brand/10 lg:-right-10 lg:w-60"
        />
        <div className={`${CONTAINER} relative z-10 py-12 lg:py-16`}>
          <Kicker>{article.category}</Kicker>
          <h1 className="h1-compact mt-4 max-w-[52rem] font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-navy sm:text-[38px] lg:text-[44px]">
            {article.title}
          </h1>
          <p className="mt-5 max-w-[42rem] text-[16px] leading-relaxed text-navy/65 lg:text-[18px]">
            {article.ingress}
          </p>
        </div>
      </section>

      <article className="bg-white py-14 lg:py-20">
        <div className={CONTAINER}>
          <div className="mx-auto max-w-[720px]">
            {article.blocks.map((block, i) => (
              <ArticleBlockView key={i} block={block} />
            ))}
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="relative isolate overflow-hidden bg-stone border-y border-navy/[0.06] py-16 lg:py-20">
          <span
            aria-hidden="true"
            className="livery-puzzle-outline aspect-[100/129] -left-14 -bottom-10 w-36 -rotate-[12deg] bg-brand/20 lg:-left-8 lg:w-52"
          />
          <div className={`${CONTAINER} relative z-10`}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-lato text-[26px] font-light leading-[1.15] text-navy sm:text-[32px]">
                Flere saker
              </h2>
              <Pill to="/aktuelt" variant="outline">
                Alle saker
              </Pill>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  to={articleHref(a)}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.14)]"
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
                    <h3 className="mt-2 flex-1 font-lato text-[18px] font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                      {a.title}
                    </h3>
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
      )}
    </div>
  );
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (block.type === "text") {
    return (
      <div className="mb-8">
        {block.heading && (
          <h2 className="mb-4 font-lato text-[22px] font-bold leading-snug text-navy sm:text-[24px]">
            {block.heading}
          </h2>
        )}
        <div className="space-y-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.75] text-navy/75 lg:text-[17px]">
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="mb-8">
        <div className="overflow-hidden rounded-[1.25rem]">
          <img
            src={block.src}
            alt={block.alt ?? ""}
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-[13px] leading-relaxed text-navy/50">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.type === "bullets") {
    return (
      <div className="mb-8">
        {block.heading && (
          <h2 className="mb-4 font-lato text-[22px] font-bold leading-snug text-navy sm:text-[24px]">
            {block.heading}
          </h2>
        )}
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime/15">
                <Check className="h-3.5 w-3.5 text-lime" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[15px] leading-relaxed text-navy/75">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h2 className="mb-2 text-[17px] font-semibold leading-snug text-navy">
        {block.question}
      </h2>
      <p className="text-[16px] leading-[1.75] text-navy/75">{block.answer}</p>
    </div>
  );
}
