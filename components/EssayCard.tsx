import Link from "next/link";
import CategoryTag from "@/components/CategoryTag";
import type { Essay } from "@/lib/content/types";

export default function EssayCard({ essay }: { essay: Essay }) {
  return (
    <article id={essay.slug} className="scroll-mt-28 border-t border-rule py-10">
      <p className="kicker">{essay.kind}</p>
      <h2 className="font-serif-heading mt-3 text-2xl leading-snug font-medium text-navy">
        {essay.title}
      </h2>

      <div className="mt-6 rounded border border-rule bg-mist p-5">
        <p className="kicker mb-2">{essay.focus.label}</p>
        <p className="font-serif-heading text-lg leading-snug text-navy italic">
          {essay.focus.text}
        </p>
      </div>

      <section className="mt-6">
        <h3 className="kicker mb-2">Abstract</h3>
        <p className="text-base leading-[1.7] text-ink-soft">{essay.abstract}</p>
      </section>

      <section className="mt-6">
        <h3 className="kicker mb-3">Excerpt</h3>
        <blockquote className="border-l-2 border-brass pl-5 text-base leading-[1.7] text-ink-soft sm:text-[1.0625rem]">
          {essay.excerpt}
        </blockquote>
      </section>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {essay.approach.map((a) => (
          <CategoryTag key={a} label={a} />
        ))}
      </div>

      <p className="mt-6 text-sm">
        {essay.publicFullText && essay.fullTextPdf ? (
          <a
            href={essay.fullTextPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm border border-navy px-3 py-1.5 font-medium text-navy transition-colors hover:bg-navy hover:text-paper"
          >
            Read the full essay (PDF)
            <span aria-hidden>→</span>
          </a>
        ) : (
          <>
            <span className="text-ink-soft">Full text available on request. </span>
            <Link
              href={`/contact?type=manuscript&item=${encodeURIComponent(essay.slug)}`}
              className="text-link"
            >
              Ask for a copy
            </Link>
          </>
        )}
      </p>
    </article>
  );
}
