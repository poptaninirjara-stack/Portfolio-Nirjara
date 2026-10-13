import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import EssayCard from "@/components/EssayCard";
import Reveal from "@/components/Reveal";
import { visibleEssays } from "@/lib/content/essays";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "Literary analysis by Nirjara Poptani: essays on Rohinton Mistry and R.K. Narayan, with abstracts, excerpts and full texts available on request.",
  alternates: { canonical: "/writing/essays" },
};

export default function EssaysPage() {
  return (
    <div className="pb-24">
      <PageHeader kicker="Writing" title="Essays">
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
        <p className="border-t border-rule pt-8 text-sm text-ink-soft">
          <Link href="/writing" className="text-link">
            ← Writing and editing
          </Link>
        </p>
      </div>
    </div>
  );
}
