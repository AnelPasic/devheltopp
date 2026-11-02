import { type ReactNode } from "react";
import { Link } from "react-router";
import {
  Apple,
  ChefHat,
  Sandwich,
  Sparkles,
  UtensilsCrossed,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const LIVERY_CONTAINER =
  "mx-auto w-full max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] px-6 sm:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24";

export interface LiveryService {
  name: string;
  href: string;
  proof: string;
  blurb: string;
}

/** One icon per service, used in the header dropdown and the puzzle section. */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  Frukt: Apple,
  Lunsj: Sandwich,
  Kantine: UtensilsCrossed,
  Catering: ChefHat,
  Inneklima: Wind,
  Renhold: Sparkles,
};

export const SERVICES: LiveryService[] = [
  {
    name: "Frukt",
    href: "/tjenester/frukt",
    proof: "Du bestemmer størrelse og innhold.",
    blurb: "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
  },
  {
    name: "Lunsj",
    href: "/tjenester/lunsj",
    proof: "For 5 personer og oppover.",
    blurb: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
  },
  {
    name: "Kantine",
    href: "/tjenester/kantine",
    proof: "Vi tar oss av hele lunsjavviklingen.",
    blurb: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
  },
  {
    name: "Catering",
    href: "/tjenester/catering",
    proof: "Vi tilbereder alt i vårt eget kjøkken.",
    blurb: "Vi tilbereder alt i vårt eget kjøkken. Fra varmmat, salater og påsmurt til spennende møte- og kursmat.",
  },
  {
    name: "Inneklima",
    href: "/tjenester/inneklima",
    proof: "Helt uten byggtekniske endringer.",
    blurb: "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
  },
  {
    name: "Renhold",
    href: "/tjenester/renhold",
    proof: "Godt renhold gir bedre trivsel.",
    blurb: "Godt renhold gir bedre trivsel og sørger for et bedre arbeidsmiljø.",
  },
];

export function StencilPlate({
  label,
  tone = "signal",
  className = "",
}: {
  label: string;
  tone?: "signal" | "aqua" | "onblue" | "ink";
  className?: string;
}) {
  const tones: Record<string, string> = {
    signal: "bg-signal text-white",
    aqua: "bg-aqua text-ink",
    onblue: "bg-white/12 text-white",
    ink: "bg-ink text-white",
  };
  return (
    <span
      className={
        "inline-flex items-center px-3 py-1 font-jakarta text-[12px] font-semibold tracking-[0.01em] " +
        tones[tone] +
        " " +
        className
      }
    >
      {label}
    </span>
  );
}

export function SectionPlate({
  title,
  proof,
  onBlue = false,
  action,
}: {
  title: string;
  proof?: string;
  onBlue?: boolean;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h2
          className={
            "whitespace-pre-line font-jakarta text-[26px] font-bold leading-[1.15] tracking-[-0.015em] sm:text-[32px] lg:text-[38px] " +
            (onBlue ? "text-white" : "text-ink")
          }
        >
          {title}
        </h2>
        {proof && (
          <p
            className={
              "mt-3 max-w-[52ch] text-[15px] leading-relaxed " +
              (onBlue ? "text-white/70" : "text-ink/60")
            }
          >
            {proof}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

export function Seam() {
  return <div aria-hidden="true" className="livery-seam" />;
}

export function LiveryCta({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost-light" | "ghost-dark";
  className?: string;
} & Record<string, unknown>) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-jakarta text-[14px] font-semibold transition-colors livery-notch";
  const variants: Record<string, string> = {
    primary: "bg-deck text-white hover:bg-signal",
    "ghost-light":
      "border border-white/40 text-white hover:border-white hover:bg-white/10",
    "ghost-dark":
      "border border-ink/25 text-ink hover:border-signal hover:text-signal",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}
