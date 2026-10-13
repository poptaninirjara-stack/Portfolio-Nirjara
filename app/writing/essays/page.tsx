import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import EssayCard from "@/components/EssayCard";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { essayHref, publicEssays, visibleEssays } from "@/lib/content/essays";
import { absoluteUrl } from "@/lib/site";
import { personId } from "@/lib/person";

export const metadata: Metadata = pageMetadata({
  title: "Essays in literary analysis",
  description:
    "Literary analysis by Nirjara Poptani: essays on Rohinton Mistry and R.K. Narayan, with abstracts, excerpts and full texts available on request.",
  path: "/writing/essays",
});

export default function EssaysPage() {
  return (
    <div className="pb-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": publicEssays.map((e) => ({
            "@type": "ScholarlyArticle",
            "@id": absoluteUrl(essayHref(e)),
            headline: e.title,
            genre: e.kind,
            abstract: e.abstract,
            author: { "@id": personId },
            keywords: e.approach.join(", "),
            inLanguage: "en-GB",
            url: absoluteUrl(essayHref(e)),
            ...(e.publicFullText && e.fullTextPdf
              ? { isAccessibleForFree: true, encoding: { "@type": "MediaObject", contentUrl: absoluteUrl(e.fullTextPdf), encodingFormat: "application/pdf" } }
              : {}),
          })),
        }}
      />
      <PageHeader back={{ href: "/writing", label: "Writing and editing" }} kicker="Literary analysis" title="Essays">
        <p>
          Literary analysis. Each entry gives the essay’s abstract, the question or
          argument it pursues, and an excerpt in the original words. Full texts are
          shared by email on request, except where marked as available to read here.
        </p>
        <p>Longer essays and research articles will be added soon.</p>
      </PageHeader>

      <div className="mx-auto max-w-[45rem] px-6">
        {visibleEssays.length ? (
          visibleEssays.map((e) => (
            <Reveal key={e.slug}>
              <EssayCard essay={e} />
            </Reveal>
          ))
        ) : (
          <p className="border-t border-rule py-8 text-ink-soft">Essays will be listed here.</p>
        )}
      </div>
    </div>
  );
}
