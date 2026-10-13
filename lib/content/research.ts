import type { Project, ResearchTheme } from "./types";

// Theme titles and areas are the author's own. The question-led paragraphs
// are a first draft from those stated areas only: no methods or findings.
export const themes: ResearchTheme[] = [
  {
    number: "01",
    title: "Disability in Indian narratives",
    question: "How do Indian narratives imagine disability, and with what aesthetics?",
    summary: "Disability in Indian narratives, and Indian aesthetics across literary and media texts.",
    body: "This strand reads disability in Indian narratives across literary and media texts, alongside Indian aesthetics. It asks how disabled lives are represented, and what the forms and conventions of those texts make visible or keep out of view.",
    tags: ["Disability studies", "Indian aesthetics", "Literary and media texts"],
  },
  {
    number: "02",
    title: "Decolonial critique",
    question: "What would it mean to read Indian texts outside a Eurocentric frame?",
    summary: "Decolonial studies and the ideological critique of Eurocentric criticism, offering an alternative for understanding texts.",
    body: "This strand works in decolonial studies and the ideological critique of Eurocentric criticism. It asks what assumptions travel with inherited critical vocabularies, and offers an alternative for understanding texts on their own terms.",
    tags: ["Decolonial studies", "Ideology critique", "Critical theory"],
  },
  {
    number: "03",
    title: "Alternate histories of caste",
    question: "Which histories of caste and social structure have narratives left untold?",
    summary: "An alternate history of caste and social structures in India.",
    body: "This strand traces an alternate history of caste and social structures in India. It asks how narratives record, contest or erase those structures, and what a different account of them might look like.",
    tags: ["Caste studies", "Social history", "Narrative"],
  },
];

// Only `ongoing` and `published` projects appear publicly. Wording is the
// author’s own; methods stay empty until the author confirms them.
export const projects: Project[] = [
  {
    slug: "disability-humour",
    title: "Disability humour in Indian texts",
    status: "ongoing",
    question: "An analysis of disability humour in selected Indian texts.",
    methods: [],
    theme: "01",
  },
  {
    slug: "precolonial-modes-of-knowledge",
    title: "Modes of knowledge in precolonial India",
    status: "ongoing",
    question: "Analysing modes of knowledge in precolonial India and identity formation.",
    methods: [],
    theme: "03",
  },
  {
    slug: "decolonial-method",
    title: "A decolonial method of understanding",
    status: "ongoing",
    stage: "In development",
    question:
      "Critiquing Western theories of analysis and interpretation, and offering a decolonial alternative method of understanding.",
    methods: [],
    theme: "02",
  },
];

export const publicProjects = projects.filter(
  (p) => p.status === "ongoing" || p.status === "published"
);

/** Projects with enough written up to justify their own /research/[slug] page. */
export const projectPages = publicProjects.filter((p) => !p.placeholder && p.description?.length);
