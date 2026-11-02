import intilityLogo from "../../images/kunder/intility.png";
import allianceLogo from "../../images/kunder/alliance.png";
import sporveienLogo from "../../images/kunder/sporveien.png";
import xxlLogo from "../../images/kunder/xxl.png";
import riksrevisjonenLogo from "../../images/kunder/riksrevisjonen.png";
import { CONTAINER } from "./site";
import { Reveal } from "./Reveal";

const customers = [
  { name: "Intility", logo: intilityLogo },
  { name: "Alliance Healthcare", logo: allianceLogo },
  { name: "Sporveien", logo: sporveienLogo },
  { name: "XXL", logo: xxlLogo },
  { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
];

/* One run of logos, wide enough to fill a large screen on its own. The track
   holds two identical runs and slides left by exactly one run, so the loop
   has no visible seam. */
const RUN = [...customers, ...customers];

function LogoRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex flex-shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
    >
      {RUN.map((customer, i) => (
        <li
          key={i}
          /* Screen readers get each customer once. */
          aria-hidden={hidden || i >= customers.length || undefined}
          className="flex flex-shrink-0 items-center justify-center"
        >
          <img
            src={customer.logo}
            alt={customer.name}
            className="max-h-7 w-auto max-w-[8rem] object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0 lg:max-h-8"
          />
        </li>
      ))}
    </ul>
  );
}

export function References() {
  return (
    <section className="bg-white">
      <Reveal className={`${CONTAINER} py-10 lg:py-12`}>
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.14em] text-navy/45">
          Noen av våre kunder
        </p>
        {/* All logos on one line, sliding slowly left in an endless loop.
            The edges fade out, and hovering pauses it. */}
        <div className="logo-marquee mt-7 overflow-hidden">
          <div className="logo-marquee-track flex w-max">
            <LogoRun />
            <LogoRun hidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
