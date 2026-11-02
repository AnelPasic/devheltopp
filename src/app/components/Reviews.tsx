import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { Quote, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CONTAINER, Pill, SectionHead } from "./site";
import { reviewId, reviews } from "../../lib/reviews";
import { Reveal } from "./Reveal";

const COUNT = reviews.length;
const loopedReviews = [...reviews, ...reviews, ...reviews];

export function Reviews() {
  const rowRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(COUNT);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pollToken = useRef(0);

  /** Horizontal-only scroll to a card. Not scrollIntoView: that also scrolls the page vertically. */
  function scrollToCard(index: number, behavior: ScrollBehavior) {
    const row = rowRef.current;
    const el = cardRefs.current[index];
    if (!row || !el) return;
    const left =
      el.getBoundingClientRect().left -
      row.getBoundingClientRect().left +
      row.scrollLeft;
    row.scrollTo({ left, behavior });
  }

  useEffect(() => {
    scrollToCard(COUNT, "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Waits until the row's smooth-scroll animation has actually settled (scrollLeft unchanged for a few frames), rather than guessing a fixed duration. */
  function whenScrollSettles(callback: () => void) {
    const row = rowRef.current;
    if (!row) return;
    const token = ++pollToken.current;
    let lastLeft = row.scrollLeft;
    let stableFrames = 0;
    let frame = 0;
    function tick() {
      if (token !== pollToken.current) return; // a newer scroll superseded this one
      frame++;
      if (frame > 2 && Math.abs(row!.scrollLeft - lastLeft) < 0.5) {
        stableFrames++;
      } else {
        stableFrames = 0;
      }
      lastLeft = row!.scrollLeft;
      if (stableFrames >= 4) {
        callback();
        return;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function goTo(target: number) {
    scrollToCard(target, "smooth");
    activeRef.current = target;

    whenScrollSettles(() => {
      let landed = target;
      if (target >= COUNT * 2) landed = target - COUNT;
      else if (target < COUNT) landed = target + COUNT;

      if (landed !== target) {
        scrollToCard(landed, "auto");
        activeRef.current = landed;
      }
    });
  }

  return (
    <section className="overflow-x-clip bg-white py-14 lg:py-20">
      <div className={CONTAINER}>
      <div className="relative rounded-[2rem] bg-stone px-5 py-12 sm:px-10 lg:px-14 lg:py-16">
        <Reveal>
          <SectionHead
            kicker="Referanser"
            title="Les hva våre kunder mener om oss"
            action={
              <div className="flex items-center gap-3">
                <Pill to="/referanser" variant="outline">
                  Referanser
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Pill>
                <button
                  type="button"
                  onClick={() => goTo(activeRef.current - 1)}
                  aria-label="Forrige"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeRef.current + 1)}
                  aria-label="Neste"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </div>
            }
          />
        </Reveal>

        <div
          ref={rowRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopedReviews.map((review, index) => (
            <Link
              key={index}
              to={`/referanser#${reviewId(review)}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group flex w-[290px] flex-shrink-0 flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.18)] sm:w-[340px] lg:w-[400px]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand/10 px-3.5 py-1.5 text-[12px] font-semibold text-brand">
                  {review.service}
                </span>
                <Quote
                  className="h-6 w-6 rotate-180 text-amber"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              {/* Long quotes are cut off with "…" on smaller screens, so the
                  cards don't get very tall. The full text stays in the page. */}
              <p className="mt-5 line-clamp-6 flex-1 text-[15px] leading-relaxed text-navy/75 sm:line-clamp-8 lg:line-clamp-none">
                {review.text}
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-navy/10 pt-4">
                <div>
                  <p className="text-[15px] font-semibold text-navy">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-navy/55">
                    {review.company}
                  </p>
                </div>
                {/* Only where the quote is cut off. */}
                <span className="inline-flex flex-shrink-0 items-center gap-1 text-[13px] font-semibold text-brand lg:hidden">
                  Les hele
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
