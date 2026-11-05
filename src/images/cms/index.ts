/// <reference types="vite/client" />

/* Thumbnails from the old heltopplagt.no CMS, self-hosted as WebP so the pages
   no longer depend on the old site. Files keep the CMS's hash as their name. */
const files = import.meta.glob<string>("./*.webp", { eager: true, import: "default" });

export function cms(hash: string): string {
  return files[`./${hash}.webp`];
}
