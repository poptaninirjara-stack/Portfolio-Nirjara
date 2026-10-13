import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, profileLinks, site } from "@/lib/site";
import { personJsonLd } from "@/lib/person";
import { themes } from "@/lib/content/research";
import { publicPublications } from "@/lib/content/publications";
import { education, experience, skills, type CVEntry } from "@/lib/content/cv";
import { statusLabel } from "@/lib/content/types";

export const metadata: Metadata = pageMetadata({
  title: "CV: MA English Literature, Fergusson College",
  description:
    "Curriculum vitae of Nirjara Poptani: education, research interests, editorial experience and skills. PDF available to download.",
  path: "/cv",
  type: "profile",
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-3 border-t border-rule py-7 break-inside-avoid-page md:grid-cols-[10rem_1fr] md:gap-8 print:grid-cols-[8rem_1fr] print:gap-6 print:py-4">
      <h2 className="kicker pt-1">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Entries({ entries }: { entries: CVEntry[] }) {
  return (
    <ol className="space-y-5 print:space-y-3">
      {entries.map((e) => (
        <li
          key={`${e.title}-${e.dates}`}
          className="grid grid-cols-1 gap-1 break-inside-avoid sm:grid-cols-[8.5rem_1fr] sm:gap-5 print:grid-cols-[7rem_1fr]"
        >
          <p className="text-sm text-ink-soft tabular-nums">{e.dates}</p>
          <div>
            <h3 className="font-sans text-base font-semibold text-navy">{e.title}</h3>
            <p className="text-sm text-ink-soft">{e.org}</p>
            {e.points && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] leading-relaxed text-ink-soft marker:text-slate-tint print:text-[9.5pt]">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function CVPage() {
  return (
    <div className="mx-auto max-w-[70rem] px-6 pt-16 pb-24 sm:pt-24 print:max-w-none print:p-0">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: absoluteUrl("/cv"),
          mainEntity: personJsonLd(),
        }}
      />

      <header className="flex flex-col gap-6 pb-8 sm:flex-row sm:items-end sm:justify-between print:pb-4">
        <div>
          <p className="kicker mb-3 print:hidden">Curriculum vitae</p>
          <h1 className="font-serif-heading text-4xl leading-[1.1] font-semibold text-navy sm:text-5xl print:text-[22pt]">
            {site.name}
          </h1>
          <p className="mt-2 text-ink-soft">MA English Literature, Fergusson College, Pune</p>
          <p className="mt-1 text-sm text-ink-soft">
            {site.email}
            {profileLinks().map((l) => (
              <span key={l.label}>
                {" · "}
                {l.href.replace(/^https?:\/\//, "")}
              </span>
            ))}
            <span className="hidden print:inline"> · {site.url.replace(/^https?:\/\//, "")}</span>
          </p>
        </div>
        <a
          href={site.cvPdf}
          download
          className="w-fit rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 print:hidden"
        >
          Download PDF
        </a>
      </header>

      <Section title="Research interests">
        <ul className="space-y-1.5 text-base text-ink-soft">
          {themes.map((t) => (
            <li key={t.number}>{t.summary}</li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <Entries entries={education} />
      </Section>

      {publicPublications.some((p) => !p.placeholder) && (
        <Section title="Publications">
          <ol className="space-y-2 text-base text-ink-soft">
            {publicPublications
              .filter((p) => !p.placeholder)
              .map((p) => (
                <li key={p.slug} className="hanging">
                  {p.authors.join(", ")} ({p.year}). <cite className="italic">{p.title}</cite>.{" "}
                  {p.status === "published" && p.venue ? `${p.venue}.` : `${statusLabel[p.status]}.`}
                </li>
              ))}
          </ol>
        </Section>
      )}

      <Section title="Editorial and academic experience">
        <Entries entries={experience} />
      </Section>

      <Section title="Skills">
        <dl className="space-y-2 text-[0.95rem] text-ink-soft">
          {skills.map((s) => (
            <div key={s.label} className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] sm:gap-4">
              <dt className="font-medium text-navy">{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <p className="border-t border-rule pt-6 text-sm text-ink-soft print:hidden">
        <Link href="/contact" className="text-link">
          Contact
        </Link>{" "}
        for references or a full list of editorial work.
      </p>
    </div>
  );
}
