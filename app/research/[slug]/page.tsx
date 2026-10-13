import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusChip from "@/components/StatusChip";
import CategoryTag from "@/components/CategoryTag";
import { projectPages, themes } from "@/lib/content/research";

// Only ongoing or published, non-placeholder projects get a page.
export const dynamicParams = false;

export function generateStaticParams() {
  return projectPages.map((p) => ({ slug: p.slug }));
}

const getProject = (slug: string) => projectPages.find((p) => p.slug === slug);

export async function generateMetadata(
  props: PageProps<"/research/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.question,
    alternates: { canonical: `/research/${project.slug}` },
  };
}

export default async function ProjectPage(props: PageProps<"/research/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();
  const theme = themes.find((t) => t.number === project.theme);

  return (
    <article className="mx-auto max-w-[45rem] px-6 pt-16 pb-24 sm:pt-24">
      <p className="kicker mb-4">
        <Link href="/research" className="hover:underline">
          Research
        </Link>
        {theme && ` · ${theme.number} ${theme.title}`}
      </p>
      <StatusChip status={project.status} />
      <h1 className="font-serif-heading mt-4 text-4xl leading-[1.1] font-semibold text-navy sm:text-5xl">
        {project.title}
      </h1>
      <p className="font-serif-heading mt-4 text-xl leading-snug text-ink-soft italic">
        {project.question}
      </p>

      <section className="mt-10 border-t border-rule pt-6">
        <h2 className="kicker mb-3">Methods</h2>
        <div className="flex flex-wrap gap-1.5">
          {project.methods.map((m) => (
            <CategoryTag key={m} label={m} />
          ))}
        </div>
      </section>

      {project.description && (
        <div className="mt-10 space-y-5 border-t border-rule pt-6 text-base leading-[1.7] text-ink-soft sm:text-[1.0625rem]">
          {project.description.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
      )}
    </article>
  );
}
