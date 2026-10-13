import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import TypewriterHero from "@/components/TypewriterHero";
import ResearchTheme from "@/components/ResearchTheme";
import PublicationItem from "@/components/PublicationItem";
import ContactStrip from "@/components/ContactStrip";
import EssayTeaser from "@/components/EssayTeaser";
import { publicEssays } from "@/lib/content/essays";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { personJsonLd } from "@/lib/person";
import { themes } from "@/lib/content/research";
import { publicPublications } from "@/lib/content/publications";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Researcher in Indian literary and media narratives", description: site.description, path: "/", type: "profile" }),
  title: { absolute: `${site.name} — Researcher in Indian literary and media narratives` },
};

const writing = [
  {
    kicker: "Academic editing",
    name: "Ivy Prep",
    summary:
      "Coaching students through academic argument and application writing, including a John Locke Institute essay shortlisted for the London conference.",
    href: "/writing/ivy-prep",
  },
  {
    kicker: "Editorial",
    name: "XAP",
    summary:
      "Senior Editor of Xavier’s Ahmedabad Periodical: thirty-plus articles edited, and editorial calls made on voice, representation and care.",
    href: "/writing/xap",
  },
];

export default function Home() {
  const recent = publicPublications.slice(0, 2);

  return (
    <div>
      <JsonLd data={{ "@context": "https://schema.org", ...personJsonLd() }} />

      {/* Hero */}
      <section className="mx-auto max-w-[70rem] px-6 pt-12 pb-12 sm:pt-16 sm:pb-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-14">
          <div className="max-w-[42rem]">
            <h1 className="font-serif-heading text-5xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-6xl">
              {site.name}
            </h1>
            <div className="mt-3">
              <TypewriterHero text={site.tagline} />
            </div>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">
              {site.positioning}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Interdisciplinary social sciences and literary studies · MA English
              Literature, Fergusson College
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-sm border border-slate/40 bg-mist px-3 py-1.5 text-sm text-navy">
              <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-slate" />
              {site.availability}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                Read my research
              </Link>
              <a
                href={site.cvPdf}
                download
                className="rounded-sm border border-navy px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-paper"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="relative order-first h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-paper shadow-lg ring-1 ring-navy/15 md:order-none md:h-[230px] md:w-[230px] lg:h-[260px] lg:w-[260px]">
            <Image
              src="/nirjara-portrait.jpg"
              alt="Portrait of Nirjara Poptani"
              fill
              priority
              sizes="(min-width: 1024px) 260px, (min-width: 768px) 230px, 144px"
              className="object-cover object-[50%_22%]"
            />
          </div>
        </div>
      </section>

      {/* 01 Research */}
      <section aria-labelledby="home-research" className="border-t border-rule">
        <div className="mx-auto max-w-[70rem] px-6 pt-8 pb-16 sm:pb-20">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 id="home-research" className="kicker">
              01 Research
            </h2>
            <Link href="/research" className="text-sm text-slate hover:underline">
              All research →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {themes.map((t) => (
              <ResearchTheme key={t.number} theme={t} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 02 Publications */}
      <section aria-labelledby="home-publications" className="border-t border-rule">
        <div className="mx-auto max-w-[70rem] px-6 pt-8 pb-16 sm:pb-20">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h2 id="home-publications" className="kicker">
              02 Publications
            </h2>
            <Link href="/publications" className="text-sm text-slate hover:underline">
              All publications →
            </Link>
          </div>
          <Reveal>
            <div className="max-w-[45rem]">
              {recent.length ? (
                recent.map((p) => <PublicationItem key={p.slug} pub={p} compact />)
              ) : (
                <p className="font-serif-heading border-t border-rule pt-6 text-2xl text-navy italic sm:text-3xl">
                  Publications coming soon.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 Writing and editing */}
      <section aria-labelledby="home-writing" className="border-t border-rule">
        <div className="mx-auto max-w-[70rem] px-6 pt-8 pb-20 sm:pb-24">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 id="home-writing" className="kicker">
              03 Writing and editing
            </h2>
            <Link href="/writing" className="text-sm text-slate hover:underline">
              All writing →
            </Link>
          </div>
          <h3 className="font-serif-heading mb-4 text-2xl font-medium text-navy sm:text-3xl">
            Literary essays
          </h3>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {publicEssays.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.05} className="h-full">
                <EssayTeaser essay={e} featured={i === 0} headingLevel="h3" />
              </Reveal>
            ))}
          </div>
          <h3 className="kicker mt-10 mb-4">Editing</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {writing.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05} className="h-full">
                <WorkCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
