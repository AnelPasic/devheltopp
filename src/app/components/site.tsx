import { useId, type ReactNode } from "react";
import { Link } from "react-router";

/**
 * Words with a hand-painted blue brush stroke underneath: thick at the left,
 * tapering to a point at the right, with rough edges, sitting behind the
 * letters. It wipes in from the left once the words appear. Used for
 * "Helt Opplagte" in the home hero and "Helt Opplagt!" in the contact box.
 */
export function BrushUnderline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`relative isolate inline-block whitespace-nowrap font-payoff font-bold ${className}`}>
      {children}
      <BrushStroke className="-left-[2%] top-[80%] h-[0.3em] w-[104%] [clip-path:inset(0_0_0_0)] motion-safe:transition-[clip-path] motion-safe:duration-700 motion-safe:ease-out motion-safe:[transition-delay:700ms] motion-safe:starting:[clip-path:inset(0_100%_0_0)]" />
    </span>
  );
}

/** The blue brush stroke on its own, positioned by the caller. It sits
    behind the text of a `relative isolate` parent. */
export function BrushStroke({ className = "" }: { className?: string }) {
  const filterId = `brush-${useId().replace(/:/g, "")}`;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -z-10 overflow-visible text-brand ${className}`}
    >
      <defs>
        <filter id={filterId} x="-2%" y="-40%" width="104%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7 0.35" numOctaves="2" seed="8" />
          <feDisplacementMap in="SourceGraphic" scale="2.5" />
        </filter>
      </defs>
      <path
        d="M6 14 C 90 9, 190 6, 296 8 C 200 11, 110 16, 6 22 C 1 21, 1 15, 6 14 Z"
        fill="currentColor"
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}

export const CONTAINER =
  "mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10";

/* Entrance on first paint: fades and lifts in, staggered per element via
   [transition-delay:…]. Users who prefer reduced motion see it at rest. */
export const ENTER =
  "motion-safe:transition-[opacity,translate] motion-safe:duration-1500 motion-safe:ease-out motion-safe:starting:translate-y-3 motion-safe:starting:opacity-0";

/* The same entrance, desktop only: on phones the page just appears. */
export const ENTER_DESKTOP =
  "lg:motion-safe:transition-[opacity,translate] lg:motion-safe:duration-1500 lg:motion-safe:ease-out lg:motion-safe:starting:translate-y-3 lg:motion-safe:starting:opacity-0";

/* Photo counterpart of ENTER_DESKTOP: fades only, no lift. */
export const FADE_DESKTOP =
  "lg:motion-safe:transition-opacity lg:motion-safe:duration-1000 lg:motion-safe:ease-out lg:motion-safe:starting:opacity-0";

const PUZZLE_PATH =
  "M70 420L370 420C400 330 330 300 330 200C330 85 415 30 500 30C585 30 670 85 670 200C670 300 600 330 630 420L930 420L930 735C860 760 820 690 770 700C690 715 650 790 650 870C650 950 690 1025 770 1040C820 1050 860 980 930 1005L950 1225L60 1225L70 1005C140 1030 180 1050 230 1040C310 1025 350 950 350 870C350 790 310 715 230 700C180 690 140 710 70 735Z";

/** A very large puzzle piece drawn as a single thin line. The stroke stays
    1px however big the piece gets, so it reads as a fine drawn mark rather
    than a shape. Sits behind the content. */
export function LinePiece({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 1290"
      fill="none"
      className={`pointer-events-none absolute -z-10 aspect-[100/129] ${className}`}
    >
      <path
        d={PUZZLE_PATH}
        stroke="currentColor"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Small uppercase section label with a brand-blue slash, Compass-style. */
export function Kicker({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={
        "flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] " +
        (onDark ? "text-white/60" : "text-navy/55")
      }
    >
      <span
        aria-hidden="true"
        className={"text-[14px] font-bold " + (onDark ? "text-aqua" : "text-brand")}
      >
        /
      </span>
      {children}
    </p>
  );
}

/** Section header: kicker + light Lato display heading, optional lede and action. */
export function SectionHead({
  kicker,
  title,
  lede,
  action,
  onDark = false,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  action?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 max-w-[46rem]">
        <Kicker onDark={onDark}>{kicker}</Kicker>
        <h2
          className={
            "mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] sm:text-[38px] lg:text-[44px] " +
            (onDark ? "text-white" : "text-navy")
          }
        >
          {title}
        </h2>
        {lede && (
          <p
            className={
              "mt-4 max-w-[52ch] text-[15px] leading-relaxed lg:text-[16px] " +
              (onDark ? "text-white/70" : "text-navy/60")
            }
          >
            {lede}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

/** Every action on the site is a pill. */
export function Pill({
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
  variant?: "primary" | "navy" | "outline" | "ghost-dark";
  className?: string;
} & Record<string, unknown>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[1rem] px-6 py-3 text-[14px] font-semibold transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-brand text-white hover:bg-brand-deep",
    navy: "bg-navy text-white hover:bg-brand",
    outline:
      "border border-navy/20 text-navy hover:border-brand hover:text-brand",
    /* for use on the navy panel / footer */
    "ghost-dark":
      "border border-white/30 text-white hover:border-white hover:bg-white/10",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
