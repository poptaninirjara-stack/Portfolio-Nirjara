import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import CategoryTag from "@/components/CategoryTag";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site } from "@/lib/site";
import { personId } from "@/lib/person";
import { publicEssays } from "@/lib/content/essays";
import { essayTexts } from "@/lib/content/essay-texts";

// Only essays the author has cleared for full publication get a page.
export const dynamicParams = false;

const readable = publicEssays.filter((e) => e.publicFullText && essayTexts[e.slug]);

export function generateStaticParams() {
  return readable.map((e) => ({ slug: e.slug }));
}

const getEssay = (slug: string) => readable.find((e) => e.slug === slug);

export async function generateMetadata(
  props: PageProps<"/writing/essays/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const essay = getEssay(slug);
  if (!essay) return {};
  return pageMetadata({
    title: essay.metaTitle,
    description: essay.focus.text,
    path: `/writing/essays/${essay.slug}`,
    type: "article",
  });
}

/** Sets titles of works in italics without altering the text. */
function withItalics(text: string, titles: string[]): ReactNode {
  if (!titles.length) return text;
  const escaped = titles.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return parts.map((part, i) =>
    titles.includes(part) ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>
  );
}

export default async function EssayPage(props: PageProps<"/writing/essays/[slug]">) {
  const { slug } = await props.params;
  const essay = getEssay(slug);
  if (!essay) notFound();
  const text = essayTexts[essay.slug];
  const url = absoluteUrl(`/writing/essays/${essay.slug}`);

  return (
    <article className="mx-auto max-w-[45rem] px-6 pt-16 pb-24 sm:pt-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "@id": url,
          url,
          headline: essay.title,
          genre: essay.kind,
          abstract: essay.abstract,
          author: { "@id": personId, "@type": "Person", name: site.name },
          keywords: essay.approach.join(", "),
          inLanguage: "en-GB",
          isAccessibleForFree: true,
          articleBody: text.paragraphs.join("\n\n"),
          citation: text.worksCited,
          ...(essay.fullTextPdf
            ? { encoding: { "@type": "MediaObject", contentUrl: absoluteUrl(essay.fullTextPdf), encodingFormat: "application/pdf" } }
            : {}),
        }}
      />

      <BackLink href="/writing/essays" label="Essays" />
      <p className="kicker mb-4">{essay.kind}</p>
      <h1 className="font-serif-heading text-3xl leading-[1.15] font-semibold text-navy sm:text-[2.6rem]">
        {withItalics(essay.title, text.italicTitles)}
      </h1>
      <p className="mt-4 text-base text-ink-soft">
        By <span className="font-medium text-navy">{site.name}</span>
      </p>

      <section aria-labelledby="abstract" className="mt-10 rounded border border-rule bg-mist p-6">
        <h2 id="abstract" className="kicker mb-3">
          Abstract
        </h2>
        <p className="text-base leading-[1.7] text-ink-soft">
          {withItalics(essay.abstract, text.italicTitles)}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {essay.approach.map((a) => (
            <CategoryTag key={a} label={a} />
          ))}
        </div>
      </section>

      <div className="mt-10 space-y-6 text-[1.0625rem] leading-[1.8] text-navy/90 sm:text-lg">
        {text.paragraphs.map((p, i) => (
          <p key={i}>{withItalics(p, text.italicTitles)}</p>
        ))}
      </div>

      <section aria-labelledby="works-cited" className="mt-14 border-t border-rule pt-8">
        <h2 id="works-cited" className="font-serif-heading text-2xl font-medium text-navy">
          Works Cited
        </h2>
        <ul className="mt-5 space-y-3">
          {text.worksCited.map((c) => (
            <li key={c} className="hanging text-left text-[0.95rem] leading-relaxed text-ink-soft">
              {withItalics(c, text.italicTitles)}
            </li>
          ))}
        </ul>
      </section>

      {essay.fullTextPdf && (
        <p className="mt-10 border-t border-rule pt-6 text-sm">
          <a href={essay.fullTextPdf} target="_blank" rel="noopener noreferrer" className="text-link">
            Download the PDF
          </a>
        </p>
      )}
    </article>
  );
}
