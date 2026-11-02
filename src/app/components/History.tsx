import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CONTAINER } from "./site";
import { Head } from "./ServicePage";
import { Reveal } from "./Reveal";

export interface HistoryEntry {
  year: string;
  title: string;
  body: string;
  /** One photo, or several that the card steps through before moving on. */
  image: string | string[];
  imageAlt?: string;
}

/** Height of the fixed site header, which the pinned section sits under. */
const HEADER = 72;

/** Page scroll spent on each extra photo while its milestone holds still. */
const PHOTO_STEP = 360;

/** Free (unpinned) layout: how often the active card shows its next photo. */
const PHOTO_INTERVAL = 3500;

const photosOf = (entry: HistoryEntry) =>
  Array.isArray(entry.image) ? entry.image : [entry.image];

/**
 * Horizontal timeline that the page scroll drives. On desktop the section
 * pins under the header and vertical scrolling moves the milestones
 * sideways, one pixel for one pixel, keeping the current milestone centred.
 * A milestone with several photos holds still while the scroll steps through
 * them. On smaller screens the track is a plain swipeable row instead, and
 * the active milestone cycles its photos on a timer.
 */
export function History({
  title,
  proof,
  entries,
  ground = "white",
}: {
  title: string;
  proof?: string;
  entries: HistoryEntry[];
  /** Section background, so pages can alternate white and stone. */
  ground?: "white" | "stone";
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [compact, setCompact] = useState(false);
  const [fits, setFits] = useState(true);
  const lastWidth = useRef(0);
  const pinned = fits;
  const [offsets, setOffsets] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState<number[]>(() => entries.map(() => 0));
  const [reached, setReached] = useState<boolean[]>(() =>
    entries.map((_, i) => i === 0)
  );

  // The block must fit under the header to pin, or its lower part could
  // never scroll into view. Too tall: first try the compact layout, then
  // give up pinning. A width change starts the check over; height-only
  // changes (mobile address bar) do not, so the layout never flickers.
  useEffect(() => {
    const block = blockRef.current;
    if (!block || typeof ResizeObserver === "undefined") return;
    function check() {
      if (!block) return;
      const tall = block.offsetHeight > window.innerHeight - HEADER;
      const isCompact = block.classList.contains("is-compact");
      if (tall && !isCompact) {
        setCompact(true);
        return;
      }
      setFits(!tall);
    }
    function onResize() {
      if (window.innerWidth === lastWidth.current) return;
      lastWidth.current = window.innerWidth;
      setCompact(false);
      setFits(true);
    }
    lastWidth.current = window.innerWidth;
    check();
    const observer = new ResizeObserver(check);
    observer.observe(block);
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Where each card sits along the track, relative to the first one.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;
    const measure = () => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      const first = cards[0];
      const next = cards.map((c) => (first ? c.offsetLeft - first.offsetLeft : 0));
      setOffsets((prev) =>
        prev.length === next.length && prev.every((v, i) => v === next[i])
          ? prev
          : next
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [pinned]);

  // Pinned scroll map: each card first holds for its extra photos, then the
  // track travels to the next card. holdAt[i] is where card i arrives.
  const holds = entries.map((e) => (photosOf(e).length - 1) * PHOTO_STEP);
  const holdAt: number[] = [];
  offsets.forEach((o, i) => {
    holdAt.push(i === 0 ? 0 : holdAt[i - 1] + holds[i - 1] + (o - offsets[i - 1]));
  });
  const distance = offsets.length
    ? holdAt[holdAt.length - 1] + holds[offsets.length - 1]
    : 0;

  /** Track position and photo per card for a scroll amount into the section. */
  function mapScroll(s: number) {
    const photos = entries.map((e, i) =>
      s < (holdAt[i] ?? 0)
        ? 0
        : Math.min(
            photosOf(e).length - 1,
            Math.round((s - (holdAt[i] ?? 0)) / PHOTO_STEP)
          )
    );
    let x = 0;
    for (let i = offsets.length - 1; i >= 0; i--) {
      if (s >= holdAt[i]) {
        x = offsets[i] + Math.max(0, s - holdAt[i] - holds[i]);
        break;
      }
    }
    return { x, photos };
  }

  function show(photos: number[]) {
    setShown((prev) => (prev.every((v, i) => v === photos[i]) ? prev : photos));
  }

  function settle(x: number) {
    let index = 0;
    let best = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const gap = Math.abs(card.offsetLeft - x);
      if (gap < best) {
        best = gap;
        index = i;
      }
    });
    setActive(index);
    setReached((prev) =>
      prev[index] ? prev : prev.map((v, i) => v || i <= index)
    );
  }

  // Pinned: page scroll drives the track. Free: the track scrolls itself.
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    let frame = 0;

    function update() {
      frame = 0;
      if (!wrap || !track) return;
      const first = cardRefs.current[0];
      const centre = first ? (track.clientWidth - first.offsetWidth) / 2 : 0;
      if (pinned) {
        const start = wrap.getBoundingClientRect().top + window.scrollY - HEADER;
        const s = Math.min(Math.max(window.scrollY - start, 0), distance);
        const { x, photos } = mapScroll(s);
        track.style.transform = `translate3d(${centre - x}px, 0, 0)`;
        settle(x);
        show(photos);
      } else {
        track.style.transform = "";
        settle(track.scrollLeft + centre);
      }
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    track.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      track.removeEventListener("scroll", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinned, offsets]);

  // Free layout: the active card cycles its photos on its own.
  useEffect(() => {
    if (pinned) return;
    const n = photosOf(entries[active]).length;
    if (n < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = window.setInterval(() => {
      setShown((prev) => prev.map((v, i) => (i === active ? (v + 1) % n : v)));
    }, PHOTO_INTERVAL);
    return () => window.clearInterval(timer);
  }, [pinned, active, entries]);

  function goTo(index: number, photo = 0) {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!wrap || !track || !card) return;
    if (pinned) {
      const start = wrap.getBoundingClientRect().top + window.scrollY - HEADER;
      const at = (holdAt[index] ?? 0) + photo * PHOTO_STEP;
      window.scrollTo({ top: start + at, behavior: "smooth" });
    } else {
      setShown((prev) => prev.map((v, i) => (i === index ? photo : v)));
      const centre = (track.clientWidth - card.offsetWidth) / 2;
      track.scrollTo({ left: card.offsetLeft - centre, behavior: "smooth" });
    }
  }

  const last = entries.length - 1;
  const progress = last > 0 ? (active / last) * 100 : 100;

  const arrow =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand disabled:cursor-default disabled:opacity-30 disabled:hover:border-navy/20 disabled:hover:text-navy";

  const arrows = (
    <>
      <button
        type="button"
        onClick={() => goTo(Math.max(0, active - 1))}
        disabled={active === 0}
        aria-label="Forrige"
        className={arrow}
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
      </button>
      <button
        type="button"
        onClick={() => goTo(Math.min(last, active + 1))}
        disabled={active === last}
        aria-label="Neste"
        className={arrow}
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </>
  );

  return (
    <section
      ref={wrapRef}
      className={ground === "stone" ? "border-y border-navy/[0.06] bg-stone" : "bg-white"}
    >
      <div
        ref={blockRef}
        className={
          "overflow-hidden " +
          (ground === "stone" ? "bg-stone " : "bg-white ") +
          (compact ? "is-compact pb-8 pt-6 " : "pb-14 pt-12 lg:pb-16 lg:pt-12 ") +
          (pinned ? "sticky top-[4.5rem]" : "")
        }
      >
        <div className={CONTAINER}>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <Head title={title} proof={compact ? undefined : proof} />
              <div className="hidden items-center gap-3 sm:flex">{arrows}</div>
            </div>
          </Reveal>

          {/* Year rail with the progress line running through the markers. */}
          <Reveal delay={100}>
            <div className={compact ? "relative mt-4" : "relative mt-8"}>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-[7px] h-px bg-navy/10"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-[7px] h-px bg-brand motion-safe:transition-[width] motion-safe:duration-500"
                style={{ width: `${progress}%` }}
              />
              <ol className="relative flex justify-between">
                {entries.map((entry, i) => {
                  const on = i <= active;
                  const isActive = i === active;
                  return (
                    <li key={entry.year}>
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        className="group flex flex-col items-center gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className={
                            "relative flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 bg-white transition-colors duration-300 " +
                            (on
                              ? "border-brand"
                              : "border-navy/20 group-hover:border-navy/40")
                          }
                        >
                          <span
                            className={
                              "h-[7px] w-[7px] rounded-full bg-brand transition-transform duration-300 " +
                              (on ? "scale-100" : "scale-0")
                            }
                          />
                          {isActive && (
                            <span className="history-ring absolute -inset-2 rounded-full border border-brand" />
                          )}
                        </span>
                        <span
                          className={
                            "text-[13px] transition-colors duration-300 " +
                            (isActive
                              ? "font-bold text-brand"
                              : on
                                ? "text-navy"
                                : "text-navy/40 group-hover:text-navy")
                          }
                        >
                          {entry.year}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>

          {/* The milestone track. Pinned: translated by the page scroll.
              Free: a native horizontal scroller with snapping. */}
          <Reveal delay={200} className="mx-[calc(50%-50vw)] overflow-hidden">
            <div
              ref={trackRef}
              className={
                (compact ? "relative mt-2 flex gap-6 py-3 lg:gap-8 " : "relative mt-6 flex gap-6 py-5 lg:gap-8 ") +
                (pinned
                  ? "overflow-visible will-change-transform"
                  : "snap-x snap-mandatory overflow-x-auto px-[9vw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden " +
                    (compact
                      ? "sm:px-[calc(50%-18rem)] lg:px-[calc(50%-min(31vw,24rem))]"
                      : "sm:px-[calc(50%-12rem)] lg:px-[calc(50%-clamp(13rem,15vw,17rem))]"))
              }
            >
              {entries.map((entry, i) => {
                const isActive = i === active;
                const photos = photosOf(entry);
                return (
                  <article
                    key={entry.year}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className={
                      "w-[82vw] flex-shrink-0 origin-center snap-center motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out " +
                      (compact
                        ? "sm:w-[36rem] lg:w-[min(62vw,48rem)] "
                        : "max-w-[34rem] sm:w-[24rem] lg:w-[clamp(26rem,30vw,34rem)] ") +
                      (isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-45")
                    }
                  >
                    <div className={compact ? "flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6" : ""}>
                      <div
                        className={
                          "history-photo relative overflow-hidden rounded-[0.875rem] bg-navy/5 " +
                          (compact
                            ? "h-28 w-full flex-shrink-0 sm:aspect-[4/3] sm:h-auto sm:w-[45%] "
                            : "h-[clamp(9rem,24vh,20rem)] ") +
                          (reached[i] ? "is-on" : "")
                        }
                      >
                        {photos.map((src, k) => (
                          <img
                            key={src}
                            src={src}
                            alt={k === shown[i] ? (entry.imageAlt ?? "") : ""}
                            loading="lazy"
                            decoding="async"
                            className={
                              "absolute inset-0 h-full w-full object-cover motion-safe:transition-opacity motion-safe:duration-700 " +
                              (k === shown[i] ? "opacity-100" : "opacity-0")
                            }
                          />
                        ))}
                        {photos.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-navy/35 px-2 py-1.5 backdrop-blur-sm">
                            {photos.map((src, k) => (
                              <button
                                key={src}
                                type="button"
                                onClick={() => goTo(i, k)}
                                aria-label={`Bilde ${k + 1} av ${photos.length}`}
                                aria-current={k === shown[i] ? "true" : undefined}
                                className={
                                  "h-1.5 rounded-full transition-all duration-300 " +
                                  (k === shown[i]
                                    ? "w-4 bg-white"
                                    : "w-1.5 bg-white/50 hover:bg-white/80")
                                }
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p
                          className={
                            "font-lato font-bold leading-none tracking-[-0.03em] text-brand " +
                            (compact ? "text-[28px] sm:text-[34px]" : "mt-4 text-[40px]")
                          }
                        >
                          {entry.year}
                        </p>
                        <h3
                          className={
                            "font-lato font-bold leading-tight text-navy " +
                            (compact ? "mt-1 text-[17px] sm:text-[18px]" : "mt-2 text-[20px]")
                          }
                        >
                          {entry.title}
                        </h3>
                        <p
                          className={
                            "text-navy/65 " +
                            (compact
                              ? "mt-1.5 text-[14px] leading-snug sm:text-[15px] sm:leading-relaxed"
                              : "mt-2 text-[15px] leading-relaxed")
                          }
                        >
                          {entry.body}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-8 flex items-center gap-3 sm:hidden">{arrows}</div>
        </div>
      </div>
      {/* Scroll room: the pinned block stays put while this spacer passes. */}
      {pinned && <div aria-hidden="true" style={{ height: distance }} />}
    </section>
  );
}
