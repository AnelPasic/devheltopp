import "react";

/* React 18 does not know the camelCase `fetchPriority` prop and drops it with
   a warning, so LCP images pass the lowercase HTML attribute instead. */
declare module "react" {
  interface ImgHTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}
