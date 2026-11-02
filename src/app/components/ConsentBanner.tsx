import { useState } from "react";
import { getConsent, setConsent, type Consent } from "../../lib/attribution";
import { Pill } from "./site";

/**
 * Asks once whether we may remember where the visitor came from across
 * visits (src/lib/attribution.ts). Until they answer, nothing is stored on
 * the device. The choice itself is kept so the banner doesn't come back.
 *
 * PLACEHOLDER COPY: the wording below is a stand-in until Gard supplies the
 * final text.
 */
export function ConsentBanner() {
  const [answered, setAnswered] = useState(() => getConsent() !== null);
  if (answered) return null;

  const choose = (value: Consent) => {
    setConsent(value);
    setAnswered(true);
  };

  return (
    <div
      role="region"
      aria-label="Informasjonskapsler"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-[44rem] rounded-[1rem] border border-navy/10 bg-white/95 p-5 shadow-[0_18px_40px_-16px_rgba(13,43,64,0.35)] backdrop-blur sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-6 sm:p-6"
    >
      <p className="text-[14px] leading-relaxed text-navy/75">
        Vi lagrer hvor du kom fra (for eksempel Google eller en annonse) for å
        forstå hvordan kunder finner oss. Godtar du dette?
      </p>
      <div className="mt-4 flex flex-shrink-0 gap-2.5 sm:mt-0">
        <Pill variant="outline" onClick={() => choose("denied")} className="px-5 py-2.5">
          Avslå
        </Pill>
        <Pill onClick={() => choose("granted")} className="px-5 py-2.5">
          Godta
        </Pill>
      </div>
    </div>
  );
}
