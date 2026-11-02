import { CONTAINER, ENTER_DESKTOP } from "../components/site";
import { SERVICES } from "../components/livery";
import { ServiceCard } from "../components/Services";
import { Reveal } from "../components/Reveal";
import { useDocumentMeta } from "../../lib/use-document-meta";

export function TjenesterPage() {
  useDocumentMeta(
    "Våre tjenester",
    "Våre produkter og tjenester. Vi leverer jobbfrukt, catering, renhold, kantine og ren luft til over 50 000 ansatte i bedrifter i Oslo."
  );

  return (
    <div className="min-h-dvh bg-white">
      {/* Hero: just the heading. */}
      <section className="text-navy">
        <div className={`${CONTAINER} pb-2 pt-12 lg:pb-4 lg:pt-16`}>
          <h1
            className={`h1-compact font-lato font-light text-navy ${ENTER_DESKTOP} [transition-delay:100ms]`}
          >
            Alle våre tjenester
          </h1>
        </div>
      </section>

      {/* The same photo cards as the home page. */}
      <section className="bg-white pb-16 pt-8 lg:pb-24 lg:pt-10">
        <div className={`${CONTAINER} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7`}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={i * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
