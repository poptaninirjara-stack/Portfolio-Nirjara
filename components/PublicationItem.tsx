import Link from "next/link";
import StatusChip from "@/components/StatusChip";
import RequestButton from "@/components/RequestButton";
import { site } from "@/lib/site";
import type { Publication } from "@/lib/content/types";

function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={`${a}-${i}`}>
          {i > 0 && (i === authors.length - 1 ? " and " : ", ")}
          {a === site.name ? <strong className="font-semibold text-navy">{a}</strong> : a}
        </span>
      ))}
    </>
  );
}

export default function PublicationItem({
  pub,
  compact = false,
}: {
  pub: Publication;
  compact?: boolean;
}) {
  const published = pub.status === "published";
  const underReview = pub.status === "under-review";
  const showVenue = pub.venue && (published || pub.venueNameable);
  const hasPage = published && !pub.placeholder;

  const title = (
    <cite className="font-serif-heading text-[1.075em] text-navy italic">
      {pub.title}
    </cite>
  );

  return (
    <article className="border-t border-rule py-6">
      <div className="mb-2">
        <StatusChip status={pub.status} />
      </div>
      <p className="hanging text-base leading-relaxed text-ink-soft">
        <Authors authors={pub.authors} /> ({pub.year}).{" "}
        {hasPage ? (
          <Link href={`/publications/${pub.slug}`} className="hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
        .{" "}
        {showVenue ? <span>{pub.venue}.</span> : underReview ? <span>Under review.</span> : null}
        {published && pub.doi && (
          <>
            {" "}
            <a href={`https://doi.org/${pub.doi}`} className="text-link">
              doi:{pub.doi}
            </a>
          </>
        )}
      </p>

      {!compact && (
        <div className="mt-3 space-y-2 pl-6 text-sm leading-relaxed text-ink-soft">
          <p>
            <span className="kicker mr-2">Field</span>
            {pub.field}
          </p>
          <p>
            <span className="kicker mr-2">Keywords</span>
            {pub.keywords.join(", ")}
          </p>
          <p>
            <span className="kicker mr-2">Question</span>
            <span className="font-serif-heading text-base text-navy italic">
              {pub.researchQuestion}
            </span>
          </p>
        </div>
      )}

      {underReview && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 pl-6">
          <p className="text-sm text-ink-soft">
            Manuscript under review. Available on request.
          </p>
          <RequestButton item={pub.slug} />
        </div>
      )}
      {published && pub.pdf && (
        <p className="mt-3 pl-6 text-sm">
          <a href={pub.pdf} className="text-link">
            PDF
          </a>
        </p>
      )}
    </article>
  );
}
