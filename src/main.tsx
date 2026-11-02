
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { captureAttribution } from "./lib/attribution";

  /* Read referrer, UTM tags and ad click IDs once, before the router changes
     the URL. */
  captureAttribution();

  createRoot(document.getElementById("root")!).render(<App />);
  