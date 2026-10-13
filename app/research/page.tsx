import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ResearchTheme from "@/components/ResearchTheme";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/lib/site";
import { publicProjects, themes } from "@/lib/content/research";

export const metadata: Metadata = pageMetadata({
  title: "Research: disability, caste and decolonial critique",
  description:
    "Research themes: disability in Indian narratives and Indian aesthetics, decolonial critique of Eurocentric criticism, and alternate histories of caste.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <div className="pb-24">
      <PageHeader title="Research" wide>
        <p>{site.positioning}</p>
        <p>
          The work is interdisciplinary, drawing on literary studies and the social
          sciences. It is organised around three themes.
        </p>
      </PageHeader>

      <section aria-labelledby="themes" className="mx-auto max-w-[70rem] px-6">
        <h2 id="themes" className="kicker mb-6">
          01 Themes
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {themes.map((t) => (
            <Reveal key={t.number} className="h-full">
              <ResearchTheme theme={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="projects" className="mx-auto mt-20 max-w-[70rem] border-t border-rule px-6 pt-8">
        <h2 id="projects" className="kicker mb-6">
          02 Projects
        </h2>
        {publicProjects.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publicProjects.map((p) => (
              <Reveal key={p.slug} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-ink-soft">Projects will be listed here as they begin.</p>
        )}
      </section>

      <section aria-labelledby="collaborate" className="mx-auto mt-20 max-w-[70rem] border-t border-rule px-6 pt-8">
        <h2 id="collaborate" className="kicker mb-4">
          03 Collaboration
        </h2>
        <p className="max-w-[42rem] text-base leading-[1.7] text-ink-soft sm:text-lg">
          If your work touches on these questions, I would be glad to hear from you.{" "}
          <Link href="/contact?type=research" className="text-link">
            Get in touch about a collaboration
          </Link>{" "}
          or{" "}
          <Link href="/publications" className="text-link">
            see publications
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
