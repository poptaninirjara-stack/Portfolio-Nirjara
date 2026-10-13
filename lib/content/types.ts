export type Status =
  | "published"
  | "under-review"
  | "in-preparation"
  | "ongoing"
  | "restricted";

/**
 * `placeholder: true` marks an entry still waiting for the author's real
 * content. Placeholders render on list pages so the layout can be reviewed,
 * but they never get a detail page, a sitemap entry or citation meta tags.
 */
type Placeholder = { placeholder?: true };

export type ResearchTheme = {
  number: string;
  title: string;
  question: string;
  /** The author’s own wording, used verbatim on the CV. */
  summary: string;
  body: string;
  tags: string[];
};

export type Project = Placeholder & {
  slug: string;
  title: string;
  status: Extract<Status, "ongoing" | "published" | "in-preparation" | "restricted">;
  /** Optional stage note shown beside the chip, e.g. "In development". */
  stage?: string;
  question: string;
  /** Left empty until the author confirms methods. */
  methods: string[];
  theme: string; // ResearchTheme number, e.g. "01"
  /** Longer description for the project page. No findings while ongoing. */
  description?: string[];
};

export type Publication = Placeholder & {
  slug: string;
  title: string;
  authors: string[];
  year: string;
  status: Status;
  field: string;
  keywords: string[];
  researchQuestion: string;
  /** Only shown when `venueNameable` is true or the item is published. */
  venue?: string;
  venueNameable?: boolean;
  /** YYYY/MM/DD, the format Google Scholar asks for. */
  publicationDate?: string;
  /** Only shown for published items, or under review when the venue allows it. */
  abstract?: string;
  abstractAllowed?: boolean;
  doi?: string;
  /** Path or URL. Published items only. */
  pdf?: string;
};

// Essay text (abstract, question, excerpt) is quoted verbatim from the
// author’s file. Never paraphrase or correct it here.
export type Essay = Placeholder & {
  slug: string;
  title: string;
  /** Short title for browser tabs and search results (under ~45 characters). */
  metaTitle: string;
  /** Shown as the card label, e.g. "Literary analysis". */
  kind: string;
  abstract: string;
  /** A sentence lifted verbatim from the abstract. */
  focus: { label: "Research question" | "Argument"; text: string };
  /** Short descriptive tags for approach and theory. */
  approach: string[];
  /** Verbatim passage from the body of the essay. */
  excerpt: string;
  /** The author has cleared this essay for the site. Drafts stay false. */
  cleared: boolean;
  /** Option B. Default false: excerpt on the site, full text by email. */
  publicFullText: boolean;
  /** Required when publicFullText is true. Must live under /public. */
  fullTextPdf?: string;
};

export const statusLabel: Record<Status, string> = {
  published: "Published",
  "under-review": "Under review",
  "in-preparation": "In preparation",
  ongoing: "Ongoing",
  restricted: "Restricted",
};
