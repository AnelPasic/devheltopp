import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// import { ConsentBanner } from "../components/ConsentBanner";

/**
 * Scroll to top on route change — unless navigating to an in-page anchor, or
 * the navigation opted out via `state: { preserveScroll: true }` (the variant
 * switcher on sub-service pages, where a slug change is a content swap, not a
 * new page). The state sticks to the history entry, so back/forward between
 * switched slugs also skips the forced scroll — which is what we want there.
 */
function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    if (!hash && !(state as { preserveScroll?: boolean } | null)?.preserveScroll) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state]);

  return null;
}

export function RootLayout() {
  return (
    <div className="min-h-dvh bg-white">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-base-100 focus:text-base-content focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Hopp til hovedinnhold
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      {/* Consent banner hidden for now. Without it nobody gives consent, so
          the lead source is only remembered for the current visit.
      <ConsentBanner />
      */}
    </div>
  );
}
