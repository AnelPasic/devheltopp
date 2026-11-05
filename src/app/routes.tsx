import { useEffect, type ComponentType } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";

/* Every page except the home page is split into its own chunk and fetched on
   first visit, so the initial download only carries what the front page needs. */
function page<M>(load: () => Promise<M>, name: keyof M) {
  return async () => ({ Component: (await load())[name] as ComponentType });
}

const KARRIERE_URL = "https://karriere.heltopplagt.com/";

/* Careers live on the Teamtailor site; /karriere just forwards there. */
function KarriereRedirect() {
  useEffect(() => {
    window.location.replace(KARRIERE_URL);
  }, []);
  return null;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    /* Shown only for the instant a lazily loaded page is fetched on first load. */
    HydrateFallback: () => null,
    children: [
      { index: true, Component: HomePage },
      { path: "referanser", lazy: page(() => import("./pages/ReferanserPage"), "ReferanserPage") },
      { path: "om-oss", lazy: page(() => import("./pages/OmOssPage"), "OmOssPage") },
      { path: "aktuelt", lazy: page(() => import("./pages/AktueltPage"), "AktueltPage") },
      { path: "aktuelt/:slug", lazy: page(() => import("./pages/ArtikkelPage"), "ArtikkelPage") },
      { path: "ansvar", lazy: page(() => import("./pages/AnsvarPage"), "AnsvarPage") },
      { path: "kontakt", lazy: page(() => import("./pages/KontaktPage"), "KontaktPage") },
      { path: "takk", lazy: page(() => import("./pages/TakkPage"), "TakkPage") },
      { path: "personvern", lazy: page(() => import("./pages/PersonvernPage"), "PersonvernPage") },
      { path: "karriere", Component: KarriereRedirect },
      { path: "tjenester", lazy: page(() => import("./pages/TjenesterPage"), "TjenesterPage") },
      { path: "tjenester/frukt", lazy: page(() => import("./pages/tjenester/Frukt"), "FruktPage") },
      { path: "tjenester/lunsj", lazy: page(() => import("./pages/tjenester/Lunsj"), "LunsjPage") },
      { path: "tjenester/renhold", lazy: page(() => import("./pages/tjenester/Renhold"), "RenholdPage") },
      { path: "tjenester/catering", lazy: page(() => import("./pages/tjenester/Catering"), "CateringPage") },
      { path: "tjenester/inneklima", lazy: page(() => import("./pages/tjenester/Inneklima"), "InneklimaPage") },
      { path: "tjenester/kantine", lazy: page(() => import("./pages/tjenester/Kantine"), "KantinePage") },
      /* The combined "lunsjesker" sub-page was split into the three box pages
         (Hverdags-/Go'-/Superlunsjen) — keep the retired URL alive. */
      {
        path: "tjenester/lunsj/lunsjesker",
        element: <Navigate to="/tjenester/lunsj/hverdagslunsjen" replace />,
      },
      { path: "tjenester/frukt/fruktkurver", lazy: page(() => import("./pages/tjenester/FruktkurverPage"), "FruktkurverPage") },
      { path: "tjenester/:service/:slug", lazy: page(() => import("./pages/tjenester/SubServicePage"), "SubServicePage") },
      { path: "*", lazy: page(() => import("./pages/NotFoundPage"), "NotFoundPage") },
    ],
  },
]);
