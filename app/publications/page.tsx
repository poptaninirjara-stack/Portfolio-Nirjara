import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PublicationItem from "@/components/PublicationItem";
import PublicationList from "@/components/PublicationList";
import { publicPublications } from "@/lib/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and manuscripts by Nirjara Poptani, with status. Manuscripts under review are available on request.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  return (
    <div className="pb-24">
      <PageHeader title="Publications">
        <p>
          Published articles and manuscripts under review will be listed here, each with
          its status. Manuscripts under review can be shared on request.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-[45rem] px-6">
        {publicPublications.length ? (
          <PublicationList
            items={publicPublications.map((p) => ({
              key: p.slug,
              status: p.status,
              node: <PublicationItem pub={p} />,
            }))}
            emptyPublished={<p className="text-ink-soft">Publications coming soon.</p>}
          />
        ) : (
          <p className="font-serif-heading border-t border-rule pt-8 text-2xl text-navy italic">
            Publications coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
