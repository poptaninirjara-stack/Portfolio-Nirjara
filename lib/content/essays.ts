import type { Essay } from "./types";

// Source: "Essays for website/" (author’s PDFs). All quoted text is verbatim.
// Rules (brief, section 5):
// - Only essays the author has cleared are shown.
// - publicFullText defaults to false: excerpt here, full text by email.
// - Full texts for publicFullText: false essays must NOT be placed in /public.
export const essays: Essay[] = [
  {
    slug: "mimicry-and-mutilation-a-fine-balance",
    title:
      "Feudal Tyranny to State Biopower: Mimicry and Mutilation in Mistry’s A Fine Balance",
    kind: "Literary analysis",
    abstract:
      "This essay analyses Rohiton Mistry's A Fine Balance (1995) through a postcolonial and poststructuralist lens. Using Homi Bhabha's concepts of mimicry and ambivalence as primary grounding, and Michel Foucault's models of biopower and bodily regulation alongside it. Primarily, the essay argues that the postcolonial power structures in India did not function as a seamless regime. Instead, they functioned as an anxious formation whose claims to absolute control were unsettled by subaltern mimicry and hybrid domestic spaces. Set during the Emergency, the text portrays state rhetoric merged with feudal caste hierarchies and aggressive biopolitical power over the subaltern power. However, while Bhabha's framework shows how the subaltern subject negotiates and creates domestic spaces, Mistry's narrative realism demonstrates that symbolic slippage remains insufficient to shield the subaltern body from state inflicted violence and measures of absolute control.",
    focus: {
      label: "Argument",
      text: "Primarily, the essay argues that the postcolonial power structures in India did not function as a seamless regime. Instead, they functioned as an anxious formation whose claims to absolute control were unsettled by subaltern mimicry and hybrid domestic spaces.",
    },
    approach: ["Postcolonial theory", "Poststructuralism", "Bhabha", "Foucault", "Caste"],
    excerpt:
      "The compulsory sterilization camps present the most powerful manifestation of biopower, wherein the state authorities kidnap vulnerable citizens to meet administrative quota. Overpopulation is framed as the primary cause for national poverty using developmentalism framing and the subaltern reproduction is targeted to mask systematic failure. This convergence of biopower and traditional hierarchy reaches its climax when Thakur Dharamsi, the village tyrant who also murdered Narayan's family, uses his administrative authority during the Emergency to oversee local family planning operations (Mistry 532). Dharamsi subjects Om to a forced vasectomy which is deliberately extended into a castration, ensuring the eradication of Narayan's lineage. Modern state biopower thus provides new institutional instruments through which feudal caste violence is executed with medical legitimacy.",
    cleared: true,
    publicFullText: false,
  },
  {
    slug: "failed-refuge-narayan",
    title:
      "The Failed Refuge: Sainthood, Renunciation, and the Illusion of Escape in R.K. Narayan’s The Guide and The Vendor of Sweets",
    kind: "Literary analysis",
    abstract:
      "R.K. Narayan, a critically acclaimed Indian English novelist, presents recurring spiritual patterns in his novels. Across a spiritual guide and renunciation of the world in his selected texts, namely The Guide (1958) and The Vendor of Sweets (1976), Narayan shows a pattern of his heroes making choices and unable to face the consequences and hence retreating or finding refuge in spirituality. This essay questions how this strategy proves to be successful or unsuccessful in these narratives and what it implies about Narayan's patterns of storytelling. However, this essay does not rely on a fixed theoretical framework and instead focuses on analysing these patterns through close reading to reveal what the text portrays about the narrative structure and Narayan's portrayal of the refuge to spirituality by his chief characters like Raju and Jagan.",
    focus: {
      label: "Research question",
      text: "This essay questions how this strategy proves to be successful or unsuccessful in these narratives and what it implies about Narayan's patterns of storytelling.",
    },
    approach: ["Close reading", "Indian English fiction", "Narrative structure"],
    excerpt:
      "Analysing his works, a striking pattern emerges; through fraud, shame, or grief, Narayan's characters first fail in ordinary life and then take the guise of faith, becoming a saint, or mystic, in hopes of a spiritual transformation absolving their past actions. Raju in The Guide (1958) becomes a saint after forgery and imprisonment, and Jagan in The Vendor of Sweets (1976) retreats into Gandhian renunciation after his failure as a father. In the selected texts, the temple and the ochre robe function as symbolic solutions, or ways of converting worldly failure into spiritual achievement without ever confronting it. However, Narayan consistently portrays the instability of this solution. His irony either collapses the guise of faith into ambiguity, or is undercut by comic, self-interested detail, or is exposed as psychological evasion rather than real transcendence. Faith, for Narayan, becomes a costume put on to avoid consequences which his narratives never allow to settle.",
    cleared: true,
    // The author does not intend to submit this one to a journal.
    publicFullText: true,
    fullTextPdf: "/essays/failed-refuge-narayan.pdf",
  },
];

export const visibleEssays = essays.filter((e) => e.placeholder || e.cleared);

/** Real, shareable essays. The essays route enters the sitemap only when this is non-empty. */
export const publicEssays = essays.filter((e) => !e.placeholder && e.cleared);
