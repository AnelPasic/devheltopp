import { useEffect } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { CONTAINER, Pill } from "../components/site";
import { useDocumentMeta } from "../../lib/use-document-meta";

/**
 * Where the contact form sends people after a successful submit. Its own
 * address (/takk) is what Google Ads and Analytics count as a conversion.
 * Kept out of search results.
 *
 * PLACEHOLDER COPY: wording until Gard supplies the final text.
 */
export function TakkPage() {
  useDocumentMeta("Takk for henvendelsen", "Vi har mottatt henvendelsen din.");

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="bg-white">
      <section className={`${CONTAINER} flex min-h-[60vh] flex-col items-start justify-center py-16 lg:py-24`}>
        <div className="flex items-center gap-4 sm:gap-5">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-lime/15 sm:h-14 sm:w-14">
            <Check className="h-5 w-5 text-lime sm:h-7 sm:w-7" strokeWidth={3} aria-hidden="true" />
          </span>
          <h1 className="h1-compact font-lato font-light text-navy">
            Takk for henvendelsen!
          </h1>
        </div>
        <p className="mt-5 max-w-[36rem] text-[16px] leading-relaxed text-navy/65 lg:text-[17px]">
          Vi har mottatt skjemaet ditt og tar kontakt med deg så snart som mulig.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Pill to="/tjenester">
            Se våre tjenester
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Pill>
          <Pill href="tel:+4702346" variant="outline">
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            02346
          </Pill>
        </div>
      </section>
    </div>
  );
}
