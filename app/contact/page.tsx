import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { profileLinks, site } from "@/lib/site";
import { publicPublications } from "@/lib/content/publications";
import { visibleEssays } from "@/lib/content/essays";

export const metadata: Metadata = pageMetadata({
  title: "Contact: research, internships and editing",
  description:
    "Contact Nirjara Poptani about research collaboration, internships and research-assistant roles, manuscript requests or editing.",
  path: "/contact",
});

// slug → title for items that can be requested by email.
const itemTitles = Object.fromEntries(
  [
    ...publicPublications.filter((p) => p.status === "under-review"),
    ...visibleEssays.filter((e) => !e.publicFullText),
  ].map((i) => [i.slug, i.title])
);

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHeader title="Contact">
        <p>
          For research collaboration, internship or research-assistant enquiries,
          manuscript requests or editing, choose an enquiry type below. I usually reply
          within a few days.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-[45rem] px-6">
        <Reveal>
          {/* useSearchParams needs a Suspense boundary to keep this page prerendered. */}
          <Suspense fallback={<div className="h-[34rem]" aria-hidden />}>
            <ContactForm itemTitles={itemTitles} />
          </Suspense>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-8 text-sm text-ink-soft">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-slate">
            {site.email}
          </a>
          {profileLinks().map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-slate"
            >
              {l.label}
            </a>
          ))}
          <a href={site.cvPdf} download className="transition-colors hover:text-slate">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
