import Link from "next/link";
import StatusChip from "@/components/StatusChip";
import CategoryTag from "@/components/CategoryTag";
import type { Project } from "@/lib/content/types";

export default function ProjectCard({ project }: { project: Project }) {
  const hasPage = !project.placeholder && Boolean(project.description?.length);
  return (
    <article className="flex h-full flex-col rounded border border-rule bg-mist p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="flex flex-wrap items-center gap-2">
          <StatusChip status={project.status} />
          {project.stage && <span className="text-xs text-ink-soft">{project.stage}</span>}
        </span>
        <a href={`#theme-${project.theme}`} className="kicker hover:underline">
          Theme {project.theme}
        </a>
      </div>
      <h3 className="font-serif-heading mt-4 text-xl font-medium text-navy">
        {hasPage ? (
          <Link href={`/research/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{project.question}</p>
      {project.methods.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.methods.map((m, i) => (
            <CategoryTag key={`${m}-${i}`} label={m} />
          ))}
        </div>
      )}
    </article>
  );
}
