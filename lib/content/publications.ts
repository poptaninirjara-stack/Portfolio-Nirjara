import type { Publication } from "./types";

// Nothing to list yet: pages show "Publications coming soon".
// in-preparation and restricted items must never be added here: this file is
// bundled into public pages. Keep them out of the repository entirely.
export const publications: Publication[] = [];

/** Only published and under-review items are ever shown. */
export const publicPublications = publications.filter(
  (p) => p.status === "published" || p.status === "under-review"
);

/** Items that get a /publications/[slug] page and citation meta tags. */
export const publicationPages = publications.filter(
  (p) => p.status === "published" && !p.placeholder
);
