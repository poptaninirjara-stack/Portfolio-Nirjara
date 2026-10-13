// Source: the resume PDF (now /cv.pdf). The unsupported "76% reach" line has
// been dropped, and the phone number is left off the public HTML page.

export type CVEntry = {
  dates: string;
  title: string;
  org: string;
  points?: string[];
};

export const education: CVEntry[] = [
  {
    dates: "2026–2028",
    title: "MA, English Literature",
    org: "Fergusson College (Autonomous), Pune",
  },
  {
    dates: "2023–2026",
    title: "BA, English Literature",
    org: "St. Xavier’s College (Autonomous), Ahmedabad",
  },
  {
    dates: "2022–2023",
    title: "AISSCE, Class XII (Humanities)",
    org: "Shree Narayana Central School, Ahmedabad",
  },
];

export const experience: CVEntry[] = [
  {
    dates: "Jan–May 2026",
    title: "Academic Coordinator",
    org: "Ivy Prep India, Ahmedabad",
    points: [
      "Coached three students on John Locke Institute essay competition submissions; one was shortlisted and invited to the annual conference in London.",
      "Edited 20+ summer programme application essays for clarity, structure and argument.",
      "Counselled 10 students in the Undergraduate Journal Program on writing a three-part journal series.",
      "Coordinated deadlines and submissions for 14+ students; compiled a database of 70+ summer programmes.",
    ],
  },
  {
    dates: "2024–2026",
    title: "Senior Editor",
    org: "Xavier’s Ahmedabad Periodical (XAP), St. Xavier’s College, Ahmedabad",
    points: [
      "Led a team of 25 students on a bi-monthly academic and creative periodical.",
      "Edited 30+ articles and curated theme-based content for eight-page spreads.",
      "Managed the editorial calendar from ideation and writer briefings to print; designed three editions.",
      "Raised ₹25,000 in sponsorships for print issues.",
    ],
  },
  {
    dates: "2021–present",
    title: "Lead Copywriter (pro bono)",
    org: "Shramik Naari Sangh (Chaakri), Maharashtra",
    points: [
      "Own brand copywriting, campaign scripting and brand voice for an NGO-run ethical brand employing women garment workers.",
      "Wrote copy and scripts for 400+ social media posts and all video-based campaigns.",
      "Campaign content contributed to sales exceeding ₹1,00,000.",
    ],
  },
  {
    dates: "Dec 2024–Mar 2025",
    title: "Junior Copywriter",
    org: "Sane Creative Studio, Ahmedabad",
    points: [
      "Wrote roughly 60–70% of the studio’s monthly copy output across about 30 real estate and lifestyle clients.",
    ],
  },
  {
    dates: "Dec 2023–May 2024",
    title: "Curatorial and Editorial Intern",
    org: "Esteem Publication",
    points: [
      "Typeset and edited J.M. Barrie’s Peter Pan for republication, including the verso, blurb, editor’s note and editorial insight.",
      "Led a sub-team of eight for The Social segment of the e-magazine; edited and published 10+ articles.",
    ],
  },
];

export const skills: { label: string; value: string }[] = [
  {
    label: "Editing",
    value:
      "Academic and application essays, long-form articles, book-length text, copyediting and proofreading",
  },
  {
    label: "Editorial management",
    value: "Team coordination, editorial calendars, content curation, print production",
  },
  {
    label: "Writing",
    value: "Brand voice, content strategy, campaign and audio-visual scripts",
  },
  {
    label: "Tools",
    value: "Google Workspace, WordPress, Canva, Notion",
  },
  {
    label: "Languages",
    value: "English (fluent), Hindi (working proficiency), Gujarati (working proficiency)",
  },
];
