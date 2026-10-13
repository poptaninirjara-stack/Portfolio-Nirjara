import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Per-page metadata. A page's `openGraph` replaces the root one entirely, so
 * each page sets its own title, description and URL here; otherwise every
 * shared link would preview as the home page. The share image is set here
 * too, because a page-level openGraph drops any inherited image.
 */
export const shareImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Nirjara Poptani: researcher in Indian literary and media narratives, MA English Literature, Fergusson College",
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_GB",
      siteName: site.name,
      title: `${title} — ${site.name}`,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [shareImage.url],
    },
  };
}
