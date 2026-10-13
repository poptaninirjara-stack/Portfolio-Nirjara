// Single source of truth for identity and URLs. The domain lives here and
// nowhere else; change `url` when the site moves off Vercel.

export const site = {
  name: "Nirjara Poptani",
  url: "https://portfolio-nirjara.vercel.app",
  description:
    "Nirjara Poptani researches Indian literary and media narratives, from disability and aesthetics to caste and decolonial critique. MA English Literature, Fergusson College.",
  positioning:
    "Research in Indian literary and media narratives, from disability and aesthetics to caste and decolonial critique.",
  tagline: "An editor who researches, and a researcher who edits.",
  availability: "Open to research internships and research-assistant roles.",
  email: "poptaninirjara@gmail.com",
  jobTitle: "MA English Literature student",
  affiliation: "Fergusson College",
  cvPdf: "/cv.pdf",
  profiles: {
    linkedin: "https://linkedin.com/in/nirjarap" as string | null,
    // Not created yet. A null value hides the link everywhere.
    orcid: null as string | null,
    scholar: null as string | null,
  },
};

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

/** Profile links that actually exist, in display order. */
export function profileLinks() {
  const { orcid, scholar, linkedin } = site.profiles;
  return [
    { label: "ORCID", href: orcid },
    { label: "Google Scholar", href: scholar },
    { label: "LinkedIn", href: linkedin },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));
}

export const sameAs = () => profileLinks().map((l) => l.href);
