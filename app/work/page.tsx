import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CategoryTag from "@/components/CategoryTag";

export const metadata = {
  title: "Work — Nirjara Poptani",
};

function IntroBlock({
  name,
  meta,
  tags,
  intro,
  href,
}: {
  name: string;
  meta: string;
  tags: string[];
  intro: string;
  href: string;
}) {
  return (
    <Reveal>
      <Link
        href={href}
        className="group block rounded-2xl border border-navy/10 bg-white/40 p-8 transition-colors hover:border-accent-slate/40 sm:p-10"
      >
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <CategoryTag key={t} label={t} />
          ))}
        </div>
        <h3 className="font-serif-heading text-2xl font-medium text-navy sm:text-3xl">
          {name}
        </h3>
        <p className="mt-1 text-sm text-navy/50">{meta}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
          {intro}
        </p>
        <span className="mt-6 inline-flex items-center gap-1 text-sm text-accent-brass">
          Read the case study
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <h1 className="font-serif-heading mb-16 text-4xl font-semibold text-navy sm:text-5xl">
          Work
        </h1>
      </Reveal>

      <div className="flex flex-col gap-6">
        <IntroBlock
          name="Chaakri"
          meta="2021–Present"
          tags={["Brand Identity", "Content Strategy", "Writing"]}
          intro="Four years, zero invoices. A sustained pro bono commitment to an ethical, NGO-run brand — four campaigns, a 76% jump in reach, and a voice built from scratch."
          href="/work/chaakri"
        />
        <IntroBlock
          name="Ivy Prep"
          meta="Essay Editing · Academic Coaching"
          tags={["Editorial", "Coaching"]}
          intro="Twenty-plus essays edited and fourteen-plus students coached, from UCAS applications to a shortlisted John Locke Institute submission — helping students find a version of their own voice that was actually theirs."
          href="/work/ivy-prep"
        />
        <IntroBlock
          name="XAP"
          meta="Xavier's Ahmedabad Periodical"
          tags={["Editorial", "Leadership"]}
          intro="From Junior Editor to sole Senior Editor of a ten-strong team grown to twenty-five. Thirty-plus articles curated and edited, a newsroom rebuilt from the ground up, and editorial judgement exercised when it mattered most."
          href="/work/xap"
        />
      </div>

      {/* Esteem & Social Digest */}
      <section id="esteem-social-digest" className="mt-20 scroll-mt-28">
        <Reveal>
          <div className="rounded-2xl border border-navy/10 bg-white/40 p-8 sm:p-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <CategoryTag label="Editorial" />
            </div>
            <h3 className="font-serif-heading text-2xl font-medium text-navy sm:text-3xl">
              Esteem Publication &amp; The Social Digest
            </h3>
            <p className="mt-1 text-sm text-navy/50">
              Dec 2023 – May 2024
            </p>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start">
              <a
                href="https://store.pothi.com/book/j-m-barrie-peter-pan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-48 shrink-0 overflow-hidden rounded-xl border-2 border-accent-brass/30 shadow-xl shadow-navy/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent-brass/25 sm:w-56"
              >
                <Image
                  src="/esteem-peter-pan-cover.jpg"
                  alt="Peter Pan by J.M. Barrie, Esteem Publication edition, editor's insight by Nirjara Poptani"
                  width={371}
                  height={477}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <div className="max-w-2xl space-y-4 text-base leading-relaxed text-navy/80">
                <p>
                  Two sister publications under the same organisation,
                  tackled during coursework in web content writing. For
                  Esteem, work centred on editing J.M. Barrie&rsquo;s{" "}
                  <em>Peter Pan</em> for republication — a close,
                  chapter-by-chapter read for grammar, continuity, and
                  typesetting, and a first introduction to editing a full
                  book rather than standalone articles.
                </p>
                <p>
                  Alongside this, leading a team of eight classmates for The
                  Social, a segment covering current social issues, from
                  concept and title selection through to final edit and
                  publishing on WordPress. This period also included early
                  spec work across formats — social posts, reel scripts, and
                  carousels — as part of the same coursework.
                </p>
                <a
                  href="https://store.pothi.com/book/j-m-barrie-peter-pan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent-brass"
                >
                  View the published edition
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-sm text-navy/50">
                A few pieces edited for The Social:
              </p>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="https://thesocialdigest.com/emeralds-for-dinner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-slate underline decoration-accent-slate/30 underline-offset-4 hover:decoration-accent-slate"
                  >
                    &ldquo;Emeralds for Dinner&rdquo;
                  </a>
                </li>
                <li>
                  <a
                    href="https://thesocialdigest.com/societal-influence-on-self-image/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-slate underline decoration-accent-slate/30 underline-offset-4 hover:decoration-accent-slate"
                  >
                    &ldquo;Societal Influence on Self Image&rdquo;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sane Creative Studio */}
      <section id="sane-creative-studio" className="mt-6 scroll-mt-28">
        <Reveal>
          <div className="rounded-2xl border border-navy/10 bg-white/40 p-8 sm:p-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <CategoryTag label="Copywriting" />
            </div>
            <h3 className="font-serif-heading text-2xl font-medium text-navy sm:text-3xl">
              Sane Creative Studio
            </h3>
            <p className="mt-1 text-sm text-navy/50">Dec 2024 – Mar 2025</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
              A short, high-volume stint as Junior Copywriter, working across
              roughly 30 real estate and lifestyle clients. Handled the bulk
              of the studio&rsquo;s monthly output — post copy, captions,
              campaign content, and property listing reel scripts —
              alongside end-to-end campaign copy including taglines, ad copy,
              and OOH print and billboard work.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
