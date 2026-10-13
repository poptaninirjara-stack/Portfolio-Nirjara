import { absoluteUrl, sameAs, site } from "@/lib/site";
import { themes } from "@/lib/content/research";

export const personId = absoluteUrl("/#person");

export function personJsonLd() {
  const links = sameAs();
  return {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    image: absoluteUrl("/nirjara-portrait.jpg"),
    jobTitle: site.jobTitle,
    affiliation: { "@type": "CollegeOrUniversity", name: site.affiliation },
    alumniOf: { "@type": "CollegeOrUniversity", name: "St. Xavier’s College, Ahmedabad" },
    knowsAbout: themes.map((t) => t.title),
    ...(links.length ? { sameAs: links } : {}),
  };
}
