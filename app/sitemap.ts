import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { projectPages } from "@/lib/content/research";
import { publicationPages } from "@/lib/content/publications";
import { publicEssays } from "@/lib/content/essays";

// Public routes and published items only. Under-review, in-preparation and
// restricted items are never listed; the essays page joins once a real,
// final and graded essay exists.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/research",
    "/publications",
    "/writing",
    "/writing/chaakri",
    "/writing/ivy-prep",
    "/writing/xap",
    ...(publicEssays.length ? ["/writing/essays"] : []),
    "/cv",
    "/contact",
    ...projectPages.map((p) => `/research/${p.slug}`),
    ...publicationPages.map((p) => `/publications/${p.slug}`),
  ];

  return routes.map((path) => ({ url: absoluteUrl(path) }));
}
