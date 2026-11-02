import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = ["Lunsj", "Kantine", "Catering", "Frukt", "Inneklima", "Renhold"];

const CHIP_ON =
  "rounded-[1rem] border border-brand bg-brand px-4 py-2 text-[13px] font-semibold text-white transition-colors";
const CHIP_OFF =
  "rounded-[1rem] border border-navy/20 px-4 py-2 text-[13px] font-semibold text-navy/60 transition-colors hover:border-brand hover:text-brand";
const LABEL = "mb-1.5 block text-[13px] font-medium text-navy/70";

interface ContactFormProps {
  initialServices?: string[];
  /** "spacious" = taller fields and a full-width button, for the /kontakt page. */
  size?: "compact" | "spacious";
}

export function ContactForm({ initialServices, size = "compact" }: ContactFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  const spacious = size === "spacious";

  const FIELD =
    "w-full rounded-xl border border-navy/15 bg-cloud/50 px-4 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-brand focus:bg-white " +
    (spacious ? "py-3.5" : "py-2.5");

  useEffect(() => {
    if (initialServices) setSelectedServices(initialServices);
  }, [initialServices]);

  /* Close the mobile service dropdown on outside clicks (details doesn't). */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = servicesRef.current;
      if (el?.open && !el.contains(e.target as Node)) el.removeAttribute("open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggleCheckbox = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={spacious ? "flex flex-col gap-5" : "flex flex-col gap-4"}
    >
      <div className={spacious ? "grid items-end gap-5 sm:grid-cols-2" : "grid items-end gap-4 sm:grid-cols-2"}>
        <label className="block">
          <span className={LABEL}>Navn</span>
          <input type="text" name="name" className={FIELD} placeholder="Ditt navn" />
        </label>
        <label className="block">
          <span className={LABEL}>Firmanavn</span>
          <input type="text" name="company" className={FIELD} placeholder="Ditt firmanavn" />
        </label>
      </div>

      <div className={spacious ? "grid items-end gap-5 sm:grid-cols-2" : "contents"}>
        <label className="block">
          <span className={LABEL}>E-post</span>
          <input
            type="email"
            name="email"
            className={`${FIELD} validator`}
            placeholder="din@epost.no"
          />
          <p className="validator-hint hidden">Skriv inn en gyldig e-postadresse</p>
        </label>
        {spacious && (
          <label className="block">
            <span className={LABEL}>Telefon</span>
            <input
              type="tel"
              name="phone"
              className={`${FIELD} validator tabular-nums`}
              placeholder="+47 123 45 678"
              pattern="[0-9 +]*"
              minLength={8}
              title="Telefonnummer med minst 8 siffer"
            />
            <p className="validator-hint hidden">Skriv inn et gyldig telefonnummer</p>
          </label>
        )}
      </div>

      <div className={spacious ? "grid items-end gap-5 sm:grid-cols-2" : "grid items-end gap-4 sm:grid-cols-2"}>
        {!spacious && (
          <label className="block">
            <span className={LABEL}>Telefon</span>
            <input
              type="tel"
              name="phone"
              className={`${FIELD} validator tabular-nums`}
              placeholder="+47 123 45 678"
              pattern="[0-9 +]*"
              minLength={8}
              title="Telefonnummer med minst 8 siffer"
            />
            <p className="validator-hint hidden">Skriv inn et gyldig telefonnummer</p>
          </label>
        )}
        <label className="block">
          <span className={LABEL}>Hvor mange ansatte er dere?</span>
          <input
            type="number"
            name="employees"
            inputMode="numeric"
            min={1}
            className={`${FIELD} tabular-nums`}
            placeholder="F.eks. 25"
          />
        </label>
      </div>

      <div>
        <span className="mb-2.5 block text-[13px] font-medium text-navy/70">
          Jeg er interessert i
        </span>

        <details ref={servicesRef} className="dropdown w-full sm:hidden">
          <summary
            className={`${FIELD} flex cursor-pointer list-none items-center justify-between gap-2 [&::-webkit-details-marker]:hidden`}
          >
            <span
              className={
                "truncate " + (selectedServices.length > 0 ? "text-navy" : "text-navy/35")
              }
            >
              {selectedServices.length > 0 ? selectedServices.join(", ") : "Velg tjenester"}
            </span>
            <ChevronDown className="h-4 w-4 flex-shrink-0 text-navy/50" strokeWidth={2.25} />
          </summary>
          <div className="dropdown-content z-20 mt-2 w-full rounded-xl border border-navy/10 bg-white p-2 shadow-[0_16px_36px_-12px_rgba(13,43,64,0.25)]">
            {services.map((service) => (
              <label
                key={service}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-navy hover:bg-cloud"
              >
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleCheckbox(service)}
                  className="h-4 w-4"
                />
                {service}
              </label>
            ))}
          </div>
        </details>

        <div className="hidden flex-wrap gap-2 sm:flex">
          {services.map((service) => {
            const on = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleCheckbox(service)}
                aria-pressed={on}
                className={on ? CHIP_ON : CHIP_OFF}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <label className="block">
        <span className={LABEL}>Melding</span>
        <textarea
          name="message"
          rows={spacious ? 5 : 3}
          className={`${FIELD} resize-none`}
          placeholder="Beskriv dine behov..."
        />
      </label>

      <button
        type="submit"
        className={
          "mt-1 inline-flex items-center justify-center gap-2 rounded-[1rem] bg-brand px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-deep " +
          (spacious ? "w-full py-3.5 text-[15px] sm:w-auto sm:self-start" : "w-full sm:w-auto sm:self-start")
        }
      >
        Send skjema
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </form>
  );
}
