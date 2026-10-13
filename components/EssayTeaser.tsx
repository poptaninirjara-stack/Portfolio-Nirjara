import Link from "next/link";
import type { Essay } from "@/lib/content/types";
import { essayHref, hasWebText } from "@/lib/content/essays";

/** Callout card for one essay, linking to its entry on the essays page. */
export default function EssayTeaser({
  essay,
  featured = false,
  headingLevel = "h3",
}: {
  essay: Essay;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link
      href={essayHref(essay)}
      className={`group flex h-full flex-col rounded border p-7 transition-colors hover:border-navy/30 sm:p-9 ${
        featured ? "border-transparent bg-steel" : "border-rule bg-mist"
      }`}
    >
      <span className="flex flex-wrap items-center justify-between gap-2">
        <span className={`kicker ${featured ? "text-navy" : ""}`}>{essay.kind}</span>
        <span className="text-xs font-medium text-navy/85">
          {hasWebText(essay) ? "Read in full" : "Excerpt · full text on request"}
        </span>
      </span>
      <Heading className="font-serif-heading mt-4 text-2xl leading-snug font-medium text-navy sm:text-[1.75rem]">
        {essay.title}
      </Heading>
      <span className="mt-4 block flex-1 border-l-2 border-brass pl-4 text-justify hyphens-auto font-serif-heading text-base leading-relaxed text-navy/90 italic sm:text-lg">
        {essay.focus.text}
      </span>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy">
        {hasWebText(essay) ? "Read the full essay" : "Read the excerpt"}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
