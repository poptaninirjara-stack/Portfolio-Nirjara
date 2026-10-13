import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CategoryTag from "@/components/CategoryTag";
import PageHeader from "@/components/PageHeader";
import HashDetails from "@/components/HashDetails";

export const metadata: Metadata = {
  title: "Writing and editing",
  description:
    "Editorial and communication work by Nirjara Poptani: academic editing at Ivy Prep, the XAP periodical, Chaakri, Esteem Publication, and critical essays.",
  alternates: { canonical: "/writing" },
};

const caseStudies = [
  {
    name: "Ivy Prep",
    meta: "Academic writing and application editing · 2026",
    tags: ["Academic editing", "Coaching"],
    intro:
      "Teaching the process of academic argument, from structure and sources to citation and proofreading, and helping students keep their own voice in application essays.",
    href: "/writing/ivy-prep",
  },
  {
    name: "XAP",
    meta: "Xavier’s Ahmedabad Periodical · 2024–2026",
    tags: ["Editorial", "Leadership"],
    intro:
      "From Junior Editor to sole Senior Editor of a team grown from ten to twenty-five. Thirty-plus articles curated and edited, and editorial judgement exercised on voice and representation.",
    href: "/writing/xap",
  },
  {
    name: "Chaakri",
    meta: "Brand voice and content strategy for an NGO-run ethical brand · 2021–present",
    tags: ["Content strategy", "Writing"],
    intro:
      "A sustained pro bono commitment: four campaigns and a brand voice built from scratch for an ethical brand run by an NGO supporting women garment workers.",
    href: "/writing/chaakri",
  },
];

const editing = [
  {
    name: "Academic and application editing",
    description:
      "Essay editing and writing coaching for students, with attention to structure, argument, sources and the writer’s own voice.",
  },
  {
    name: "Copyediting",
    description:
      "Line edits and structural feedback that sharpen a piece without losing the writer’s voice.",
  },
  {
    name: "Content strategy",
    description:
      "A consistent voice across platforms, and the editorial calendars that keep it running.",
  },
  {
    name: "Editorial management",
    description:
      "Team coordination, content curation and production oversight, from first draft to final print.",
  },
];

const earlierCommercial = [
  {
    name: "Copywriting",
    description: "Brand copy, campaign taglines and ad copy.",
  },
  {
    name: "Scriptwriting",
    description: "Audio-visual and reel scripts.",
  },
  {
    name: "Social media content",
    description: "Captions, post copy and campaign content for specific platforms and audiences.",
  },
];

export default function WritingPage() {
  return (
    <div className="pb-24">
      <PageHeader title="Writing and editing" wide>
        <p>
          This section holds my communication and editorial work: editing for
          students, a college periodical and a book publisher, and writing for an
          ethical brand. The{" "}
          <Link href="/writing/essays" className="text-link">
            essays
          </Link>{" "}
          are my academic writing, with excerpts and the questions they address.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-[70rem] px-6">
        {/* Case studies */}
        <section aria-labelledby="case-studies">
          <h2 id="case-studies" className="kicker mb-6">
            01 Case studies
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.name} className="h-full">
                <Link
                  href={c.href}
                  className={`group flex h-full flex-col rounded border p-7 transition-colors hover:border-navy/30 ${
                    i === 0 ? "border-transparent bg-steel" : "border-rule bg-mist"
                  }`}
                >
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <CategoryTag key={t} label={t} />
                    ))}
                  </div>
                  <h3 className="font-serif-heading text-2xl font-medium text-navy">{c.name}</h3>
                  <p className="mt-1 text-sm text-navy/85">{c.meta}</p>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy/85">{c.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy">
                    Read the case study
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Essays */}
        <section aria-labelledby="essays" className="mt-16 border-t border-rule pt-8">
          <h2 id="essays" className="kicker mb-4">
            02 Essays
          </h2>
          <Reveal>
            <Link href="/writing/essays" className="group block max-w-[45rem]">
              <p className="font-serif-heading text-2xl font-medium text-navy group-hover:underline">
                Essays in literary analysis
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                Literary analysis of Rohinton Mistry and R.K. Narayan, with abstracts and
                excerpts. Full texts are available on request.
              </p>
            </Link>
          </Reveal>
        </section>

        {/* Esteem & Social Digest */}
        <section
          id="esteem-social-digest"
          aria-labelledby="esteem-heading"
          className="mt-16 scroll-mt-28 border-t border-rule pt-8"
        >
          <p className="kicker mb-4">03 Close textual editing</p>
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
              <a
                href="https://store.pothi.com/book/j-m-barrie-peter-pan/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-44 shrink-0 overflow-hidden rounded border border-rule shadow-md shadow-navy/10 transition-transform hover:-translate-y-1 sm:w-52"
              >
                <Image
                  src="/esteem-peter-pan-cover.jpg"
                  alt="Peter Pan by J.M. Barrie, Esteem Publication edition, editor’s insight by Nirjara Poptani"
                  width={371}
                  height={477}
                  className="w-full"
                />
              </a>
              <div className="max-w-[42rem]">
                <h2 id="esteem-heading" className="font-serif-heading text-2xl font-medium text-navy sm:text-3xl">
                  Esteem Publication and The Social Digest
                </h2>
                <p className="mt-1 text-sm text-ink-soft">Curatorial and Editorial Intern · Dec 2023 – May 2024</p>
                <div className="mt-4 space-y-4 text-base leading-[1.7] text-ink-soft">
                  <p>
                    For Esteem, I edited J.M. Barrie&rsquo;s <em>Peter Pan</em> for
                    republication: a close, chapter-by-chapter reading for grammar,
                    continuity and typesetting, and my first experience of editing a
                    full book rather than standalone articles. I also wrote the
                    edition&rsquo;s verso, blurb, editor&rsquo;s note and editorial
                    insight.
                  </p>
                  <p>
                    For its sister publication, The Social Digest, I led a team of eight
                    classmates on The Social, a segment on current social issues, from
                    concept and title selection through to final edit and publication on
                    WordPress.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <a
                    href="https://store.pothi.com/book/j-m-barrie-peter-pan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    View the published edition
                  </a>
                  <a
                    href="https://thesocialdigest.com/emeralds-for-dinner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    &ldquo;Emeralds for Dinner&rdquo;
                  </a>
                  <a
                    href="https://thesocialdigest.com/societal-influence-on-self-image/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    &ldquo;Societal Influence on Self Image&rdquo;
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Editing support (replaces /services) */}
        <section id="editing" aria-labelledby="editing-heading" className="mt-16 scroll-mt-28 border-t border-rule pt-8">
          <p className="kicker mb-4">04 Editing support</p>
          <h2 id="editing-heading" className="font-serif-heading text-2xl font-medium text-navy sm:text-3xl">
            Editing support
          </h2>
          <p className="mt-3 max-w-[42rem] text-base leading-[1.7] text-ink-soft">
            I take on a limited amount of editing alongside my studies.{" "}
            <Link href="/contact?type=editing" className="text-link">
              Send an editing enquiry
            </Link>
            .
          </p>
          <dl className="mt-6 max-w-[56rem] divide-y divide-rule border-y border-rule">
            {editing.map((s) => (
              <div key={s.name} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <dt className="font-serif-heading text-lg font-medium text-navy">{s.name}</dt>
                <dd className="text-base leading-relaxed text-ink-soft">{s.description}</dd>
              </div>
            ))}
          </dl>

          <h3 className="kicker mt-10 mb-3">Earlier commercial work</h3>
          <dl className="max-w-[56rem] divide-y divide-rule border-y border-rule">
            {earlierCommercial.map((s) => (
              <div key={s.name} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <dt className="font-medium text-navy">{s.name}</dt>
                <dd className="text-[0.95rem] leading-relaxed text-ink-soft">{s.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Earlier roles */}
        <section aria-labelledby="earlier-roles" className="mt-16 border-t border-rule pt-8">
          <h2 id="earlier-roles" className="kicker mb-2">
            05 Earlier roles
          </h2>
          <HashDetails
            id="sane-creative-studio"
            className="max-w-[56rem] border-b border-rule"
            summary={
              <span>
                <span className="font-serif-heading text-xl font-medium text-navy">
                  Sane Creative Studio
                </span>
                <span className="ml-3 text-sm text-ink-soft">Junior Copywriter · Dec 2024 – Mar 2025</span>
              </span>
            }
          >
            <p className="max-w-[42rem] pb-6 text-base leading-[1.7] text-ink-soft">
              A short, high-volume stint across roughly 30 real estate and lifestyle
              clients. I handled most of the studio&rsquo;s monthly output (post copy,
              captions, campaign content and property listing reel scripts) alongside
              end-to-end campaign copy, including taglines, ad copy, and OOH print and
              billboard work.
            </p>
          </HashDetails>
        </section>
      </div>
    </div>
  );
}
