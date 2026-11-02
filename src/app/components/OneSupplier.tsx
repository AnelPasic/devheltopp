import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CONTAINER, Kicker, Pill } from "./site";
import { SERVICES } from "./livery";
import { Reveal } from "./Reveal";
import buildingImg from "../../images/om-oss/bygg-skilt.jpg";

const COLS = 3;

/* Which way each inner seam's knob points. +1 = the tab sticks out of the
   tile to the left/above the seam, -1 = it sticks out of the tile on the
   other side. Neighbours read the same entry with the opposite sign, so the
   pieces always fit. */
const SEAM_RIGHT = [
  [1, -1],
  [-1, 1],
];
const SEAM_BOTTOM = [-1, 1, -1];

/* One knob along a 100-unit edge, as [t along the edge, d outward]. Same
   proportions as the tab on the brand piece (public/puzzle.svg): a pinched
   neck opening into a round lobe. */
const KNOB: [number, number][] = [
  [42.2, 0],
  [44, 5.4], [39.8, 7.2], [39.8, 13.2],
  [39.8, 20.1], [44.9, 23.4], [50, 23.4],
  [55.1, 23.4], [60.2, 20.1], [60.2, 13.2],
  [60.2, 7.2], [56, 5.4], [57.8, 0],
];

/* Edges in drawing order (clockwise): start corner, direction, outward normal. */
const EDGES = [
  { from: [0, 0], dir: [1, 0], out: [0, -1] }, // top
  { from: [100, 0], dir: [0, 1], out: [1, 0] }, // right
  { from: [100, 100], dir: [-1, 0], out: [0, 1] }, // bottom
  { from: [0, 100], dir: [0, -1], out: [-1, 0] }, // left
];

/** Outline of one square tile in a 0–100 box. `signs` is [top, right,
    bottom, left]: 0 = flat, 1 = tab out, -1 = socket in. */
function tilePath(signs: number[]) {
  let d = "M0 0";
  EDGES.forEach(({ from, dir, out }, e) => {
    const s = signs[e];
    const at = ([t, k]: [number, number]) => {
      const x = from[0] + dir[0] * t + out[0] * k * s;
      const y = from[1] + dir[1] * t + out[1] * k * s;
      return `${+x.toFixed(2)} ${+y.toFixed(2)}`;
    };
    if (s !== 0) {
      d += ` L${at(KNOB[0])}`;
      for (let i = 1; i < KNOB.length; i += 3) {
        d += ` C${at(KNOB[i])} ${at(KNOB[i + 1])} ${at(KNOB[i + 2])}`;
      }
    }
    d += ` L${at([100, 0])}`;
  });
  return d + "Z";
}

function tileSigns(col: number, row: number) {
  return [
    row === 1 ? -SEAM_BOTTOM[col] : 0,
    col < COLS - 1 ? SEAM_RIGHT[row][col] : 0,
    row === 0 ? SEAM_BOTTOM[col] : 0,
    col > 0 ? -SEAM_RIGHT[row][col - 1] : 0,
  ];
}

/* Where each piece waits before the puzzle comes together:
   [x % of its cell, y % of its cell, rotation]. */
const SCATTER = [
  [-34, -28, -14],
  [6, -38, 10],
  [38, -24, 18],
  [-36, 26, 12],
  [-4, 40, -9],
  [34, 30, -20],
];
const STAGGER = 70;
const LAND = 900;

/**
 * "Flere tjenester fra en leverandør": a jigsaw of the Helt Opplagt
 * building. Each of the six pieces is one service and shows its own part of
 * the photo; they slide together into the whole building when the section
 * scrolls into view, then click into place. With reduced motion the puzzle
 * is simply shown assembled.
 */
export function OneSupplier() {
  const puzzleRef = useRef<HTMLDivElement>(null);
  const [assembled, setAssembled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const uid = useId().replace(/:/g, "");
  const markerId = `marker-${uid}`;

  useEffect(() => {
    const el = puzzleRef.current;
    const still =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined";
    if (!el || still) {
      setAssembled(true);
      setClicked(true);
      return;
    }
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        setAssembled(true);
        timer = window.setTimeout(
          () => setClicked(true),
          LAND + STAGGER * (SERVICES.length - 1)
        );
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className="overflow-x-clip bg-white py-20 lg:py-28">
      <div
        className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20`}
      >
        <Reveal>
          <Kicker>Totalleverandør</Kicker>
          <h2 className="mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-navy sm:text-[38px] lg:text-[44px]">
            Flere tjenester fra{" "}
            <span className="relative inline-block">
              en
              {/* A marker scribble under "en": a long stroke to the right,
                  a diagonal back, then a short stroke out again. It draws
                  itself in along that path when the section comes into
                  view, and a little turbulence roughens the edges like a
                  real marker. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 64"
                className="pointer-events-none absolute -left-[12%] top-[93%] aspect-[200/64] h-auto w-[124%] overflow-visible text-brand"
              >
                <defs>
                  <filter id={markerId} x="-5%" y="-30%" width="110%" height="160%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
                    <feDisplacementMap in="SourceGraphic" scale="3" />
                  </filter>
                </defs>
                <path
                  d="M8 18 C 60 15, 130 11, 192 8 L 32 50 C 60 48, 86 49, 114 53"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={17}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter={`url(#${markerId})`}
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={assembled ? 0 : 1}
                  className="transition-[stroke-dashoffset] delay-300 duration-[900ms] ease-in-out motion-reduce:transition-none"
                />
              </svg>
            </span>{" "}
            leverandør
          </h2>
          <p className="mt-4 max-w-[34rem] text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
            Mange av våre kunder setter stor pris på fordelen med å ha flere tjenester fra en leverandør. Det skaper gode synergier og legger til rette for en enklere hverdag for både ansatte og ledelse.
          </p>
          <div className="mt-9">
            <Pill to="/tjenester" variant="outline">
              Våre tjenester
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </Reveal>

        <div
          ref={puzzleRef}
          className={
            "relative mx-auto aspect-[3/2] w-full max-w-[36rem] " +
            (clicked && assembled ? "motion-safe:animate-[puzzle-click_420ms_ease-out]" : "")
          }
        >
          {SERVICES.map((service, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const [x, y, r] = SCATTER[i];
            const clipId = `piece-${uid}-${i}`;
            const shape = tilePath(tileSigns(col, row));
            return (
              <Link
                key={service.href}
                to={service.href}
                aria-label={service.name}
                /* Only the piece's own shape takes clicks, so a knob reaching
                   into a neighbour's square opens the right service. */
                className="group pointer-events-none absolute aspect-square w-1/3 focus-visible:outline-none"
                style={{
                  left: `${(col * 100) / COLS}%`,
                  top: `${row * 50}%`,
                  zIndex: 6 - i,
                  transform: assembled
                    ? "translate(0, 0) rotate(0deg)"
                    : `translate(${x}%, ${y}%) rotate(${r}deg)`,
                  opacity: assembled ? 1 : 0,
                  transition: `transform ${LAND}ms cubic-bezier(0.2, 0.7, 0.2, 1) ${i * STAGGER}ms, opacity 500ms ease ${i * STAGGER}ms`,
                }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  overflow="visible"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <clipPath id={clipId}>
                      <path d={shape} />
                    </clipPath>
                  </defs>
                  {/* The whole photo, shifted so this piece shows its own
                      part of it. The puzzle and the photo are both 3:2, so
                      the six parts make up the whole building. */}
                  <image
                    href={buildingImg}
                    x={-col * 100}
                    y={-row * 100}
                    width="300"
                    height="200"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#${clipId})`}
                  />
                  <path
                    d={shape}
                    fill="transparent"
                    stroke="#fff"
                    strokeWidth={2.5}
                    vectorEffect="non-scaling-stroke"
                    className="pointer-events-auto cursor-pointer group-focus-visible:stroke-brand"
                  />
                </svg>
                {/* White pill so the name reads on any part of the photo. */}
                <span className="pointer-events-none relative flex h-full items-center justify-center text-center">
                  <span className="rounded-full bg-white/90 px-2.5 py-1 font-lato text-[11px] font-bold text-navy shadow-[0_4px_12px_-4px_rgba(13,43,64,0.35)] backdrop-blur-sm transition-colors duration-300 group-hover:bg-white sm:px-3.5 sm:py-1.5 sm:text-[13px] lg:text-[14px]">
                    {service.name}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
