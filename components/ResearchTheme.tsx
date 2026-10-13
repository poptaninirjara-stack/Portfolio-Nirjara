import CategoryTag from "@/components/CategoryTag";
import type { ResearchTheme as Theme } from "@/lib/content/types";

export default function ResearchTheme({
  theme,
  headingLevel = "h3",
  compact = false,
}: {
  theme: Theme;
  headingLevel?: "h2" | "h3";
  compact?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <article id={`theme-${theme.number}`} className="flex h-full scroll-mt-28 flex-col border-t border-navy/80 pt-5">
      <p className="kicker">
        {theme.number} <span className="text-ink-soft">·</span> {theme.title}
      </p>
      <Heading className="font-serif-heading mt-3 text-xl leading-snug font-medium text-navy italic sm:text-[1.4rem]">
        {theme.question}
      </Heading>
      <p
        className={`mt-3 leading-relaxed text-ink-soft ${
          compact ? "text-[0.95rem]" : "text-base sm:text-[1.0625rem]"
        }`}
      >
        {theme.body}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {theme.tags.map((t) => (
          <CategoryTag key={t} label={t} />
        ))}
      </div>
    </article>
  );
}
