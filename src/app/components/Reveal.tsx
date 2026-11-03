import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades and lifts its children in the first time they scroll into view.
 * CSS-only motion; users who prefer reduced motion see the content at rest.
 * Once shown it carries `data-shown`, so children can start their own
 * motion then with `group-data-shown/reveal:` classes.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={visible || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={
        "group/reveal motion-safe:transition-[opacity,translate] motion-safe:duration-700 motion-safe:ease-out " +
        (visible
          ? "translate-y-0 opacity-100"
          : "motion-safe:translate-y-4 motion-safe:opacity-0") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
}
