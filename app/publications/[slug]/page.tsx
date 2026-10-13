import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import BackLink from "@/components/BackLink";
import { notFound } from "next/navigation";
import StatusChip from "@/components/StatusChip";
import CategoryTag from "@/components/CategoryTag";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";
import { personId } from "@/lib/person";
import { publicationPages } from "@/lib/content/publications";

// Published items only. Under-review items stay on the list page.
export const dynamicParams = false;

export function generateStaticParams() {
  return publicationPages.map((p) => ({ slug: p.slug }));
}

const getPublication = (slug: string) => publicationPages.find((p) => p.slug === slug);

export async function generateMetadata(
  props: PageProps<"/publications/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const pub = getPublication(slug);
  if (!pub) return {};

  // Google Scholar inclusion tags. Dates as YYYY/MM/DD (or the year alone).
  const citation: Record<string, string | string[]> = {
    citation_title: pub.title,
    citation_author: pub.authors,
    citation_publication_date: pub.publicationDate ?? pub.year,
  };
  if (pub.venue) citation.citation_journal_title = pub.venue;
  if (pub.doi) citation.citation_doi = pub.doi;
  if (pub.pdf) citation.citation_pdf_url = absoluteUrl(pub.pdf);

  return {
    ...pageMetadata({ title: pub.title, description: pub.abstract?.slice(0, 160) ?? pub.researchQuestion, path: `/publications/${pub.slug}`, type: "article" }),
    other: citation,
  };
}

export default async function PublicationPage(props: PageProps<"/publications/[slug]">) {
  const { slug } = await props.params;
  const pub = getPublication(slug);
  if (!pub) notFound();

  return (
    <article className="mx-auto max-w-[45rem] px-6 pt-16 pb-24 sm:pt-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: pub.title,
          author: pub.authors.map((name) =>
            name === "Nirjara Poptani" ? { "@id": personId } : { "@type": "Person", name }
          ),
          datePublished: pub.publicationDate?.replace(/\//g, "-") ?? pub.year,
          ...(pub.venue ? { isPartOf: { "@type": "Periodical", name: pub.venue } } : {}),
          keywords: pub.keywords.join(", "),
          url: absoluteUrl(`/publications/${pub.slug}`),
        }}
      />
      <BackLink href="/publications" label="Publications" />
      <StatusChip status={pub.status} />
      <h1 className="font-serif-heading mt-4 text-4xl leading-[1.1] font-semibold text-navy sm:text-5xl">
        {pub.title}
      </h1>
      <p className="mt-4 text-ink-soft">
        {pub.authors.join(", ")} · {pub.year}
        {pub.venue && (
          <>
            {" · "}
            <em>{pub.venue}</em>
          </>
        )}
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {pub.doi && (
          <a href={`https://doi.org/${pub.doi}`} className="text-link">
            doi:{pub.doi}
          </a>
        )}
        {pub.pdf && (
          <a href={pub.pdf} className="text-link">
            PDF
          </a>
        )}
      </div>

      {pub.abstract && (
        <section className="mt-10 border-t border-rule pt-6">
          <h2 className="kicker mb-3">Abstract</h2>
          <p className="text-base leading-[1.7] text-ink-soft sm:text-[1.0625rem]">{pub.abstract}</p>
        </section>
      )}

      <section className="mt-10 border-t border-rule pt-6">
        <h2 className="kicker mb-3">Keywords</h2>
        <div className="flex flex-wrap gap-1.5">
          {pub.keywords.map((k) => (
            <CategoryTag key={k} label={k} />
          ))}
        </div>
      </section>
    </article>
  );
}
