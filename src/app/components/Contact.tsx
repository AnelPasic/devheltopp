import { Mail, Phone, MapPin, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { CONTAINER, Kicker } from "./site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

/* Set to true to show the "Book et møte" tab. */
const SHOW_BOOKING = false;

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "02346",
    href: "tel:02346",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "bli@heltopplagt.no",
    href: "mailto:bli@heltopplagt.no",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Slimeveien 2b, 1275 Oslo",
    href: "https://maps.app.goo.gl/QtSdi3VgGdhP9QE86",
  },
];

interface ContactProps {
  initialServices?: string[];
}

export function Contact({ initialServices }: ContactProps) {
  const [activeTab, setActiveTab] = useState<"form" | "booking">("form");

  return (
    <section id="kontakt" className="scroll-mt-20 bg-white">
      <Reveal className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="relative isolate grid gap-12 overflow-hidden rounded-[2rem] bg-stone p-7 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:p-14">
          <div className="relative z-10">
            <Kicker>Kontakt</Kicker>
            <h2 className="mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-navy sm:text-[38px] lg:text-[44px]">
              Be om en uforpliktende prat. Vi kontakter deg!
            </h2>

            <div className="mt-10 flex flex-col gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const body = (
                  <>
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-[0_1px_2px_rgba(13,43,64,0.08)]">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-navy/45">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[16px] font-semibold text-navy">
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-4 transition-opacity hover:opacity-80"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {body}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 rounded-[1.5rem] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(13,43,64,0.28)] sm:p-8 lg:p-10">
            {SHOW_BOOKING && (
              <div
                role="tablist"
                className="mb-8 flex rounded-full bg-navy/5 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "form"}
                  onClick={() => setActiveTab("form")}
                  className={
                    "flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-[13px] font-semibold transition-colors " +
                    (activeTab === "form"
                      ? "bg-white text-navy shadow-sm"
                      : "text-navy/50 hover:text-navy")
                  }
                >
                  <Mail className="hidden h-4 w-4 sm:block" strokeWidth={2.25} />
                  Kontaktskjema
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "booking"}
                  onClick={() => setActiveTab("booking")}
                  className={
                    "flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-[13px] font-semibold transition-colors " +
                    (activeTab === "booking"
                      ? "bg-white text-navy shadow-sm"
                      : "text-navy/50 hover:text-navy")
                  }
                >
                  <Calendar className="hidden h-4 w-4 sm:block" strokeWidth={2.25} />
                  Book et møte
                </button>
              </div>
            )}

            {activeTab === "form" ? (
              <div
                key="form"
                className="motion-safe:transition-opacity motion-safe:duration-200 starting:opacity-0"
              >
                <ContactForm initialServices={initialServices} />
              </div>
            ) : (
              <div
                key="booking"
                className="flex flex-col items-center py-6 text-center motion-safe:transition-opacity motion-safe:duration-200 starting:opacity-0"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Calendar className="h-7 w-7 text-brand" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-lato text-[24px] font-bold text-navy">
                  Book et møte
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-navy/60">
                  Be om en uforpliktende prat. Vi kontakter deg!
                </p>
                <a
                  href="https://outlook.office.com/book/Bookmtemedmeg@heltopplagt.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-[1rem] bg-brand px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-deep"
                >
                  Velg tidspunkt
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
