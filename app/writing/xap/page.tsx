import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import BackLink from "@/components/BackLink";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CategoryTag from "@/components/CategoryTag";
import SectionBreak from "@/components/SectionBreak";
import Extract from "@/components/Extract";

export const metadata: Metadata = pageMetadata({
  title: "XAP: editing Xavier’s Ahmedabad Periodical",
  description:
    "XAP case study: editing Xavier’s Ahmedabad Periodical, from Junior Editor to Senior Editor of a twenty-five-strong team.",
  path: "/writing/xap",
});

export default function XapPage() {
  return (
    <div>
      <div className="mx-auto max-w-[45rem] px-6 pt-16 pb-14 sm:pt-24">
        <Reveal>
          <BackLink href="/writing" label="Writing and editing" />
          <div className="mb-5 flex flex-wrap items-center gap-4">
            <Image
              src="/xap-logo.png"
              alt="XAP — Xavier's Ahmedabad Periodical logo"
              width={44}
              height={44}
              className="rounded-md"
            />
            <div className="flex flex-wrap gap-2">
              <CategoryTag label="Editorial" />
              <CategoryTag label="Leadership" />
            </div>
          </div>
          <h1 className="font-serif-heading text-4xl leading-[1.1] font-semibold text-navy sm:text-5xl">
            XAP
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            Xavier&rsquo;s Ahmedabad Periodical · 2024–2026
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p className="kicker mb-3">
              The Interview That Mattered Most
            </p>
            <p>
              An interview is more than just getting someone to talk,
              it&rsquo;s also about maintaining their humanity. Especially if
              they are people like Rekha ben, Jyotshna ben, and Lakshmi ben,
              members of Xavier&rsquo;s housekeeping staff. We decided to
              interview them for the November 2025 issue, the first issue of
              the rebuild, and I knew that we had to ensure that they felt
              safe when speaking with us. I wrote the questions for the
              interview and mediated the conversation myself, not to lead it
              but to steer it. We asked them about their lives, letting them
              speak as working women with routines, dreams, and dignity, not
              as a human-interest footnote, or a sympathy section. This
              interview for me was more than extracting a story, and more
              about respecting the storyteller — the kind of judgement I
              care the most about bringing to any piece of editing.
            </p>
            <Extract
              src="/xap/xap-housekeeping.jpg"
              width={1053}
              height={1078}
              alt="Silent Hands, Strong Hearts: XAP interview with Jyotsna ben, Lakshmi ben and Rekha ben of the Xavier’s housekeeping staff"
              source="XAP · November 2025 · p. 7"
              note="Three members of the housekeeping staff speak about their routines, families and hopes. When asked what they would choose to become if given another chance, all three answered: teachers."
              pdf="/xap-november-2025.pdf"
              page={6}
            />
            <a
              href="/xap-november-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-brass-text hover:underline"
            >
              Read the full November 2025 issue
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-rule pt-10">
            <p className="kicker mb-3">
              From Junior Editor to &ldquo;Mini-Daily&rdquo;
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              In 2024, I joined XAP as a Junior Editor. I was mostly reading,
              shortlisting submissions and sending them to the Senior
              Editors for the final issue. But this changed fast, in July
              when Xavier&rsquo;s hosted a three-day inter-college Youth
              Festival and the paper turned into a live newsroom filling
              copy from more than eight venues, our team editing and laying
              it out same-day for morning prints. Our principal even called
              us a &ldquo;mini-daily&rdquo; of Xavier&rsquo;s, something I
              value immensely.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-rule pt-10">
            <p className="kicker mb-3">
              Rebuilding the Team
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              By the time I became a Senior Editor, then the only one left
              after my co-editors graduated, I inherited a team of ten and a
              paper that hadn&rsquo;t yet built the systems a growing
              publication needed. We were running thin on sponsorships, had
              tight timelines, and writing that didn&rsquo;t always land
              with the readers. Instead of recruiting more members to work,
              I rebuilt the structure of the team giving two Junior Editors
              the lead as Senior Editors and Marketing and Design leads
              respectively. I recruited new members into the newly
              structured team with three divisions over two days, and at the
              end we had a team of 25 students. I stayed closest to the
              editorial core, and deliberately handed real ownership to
              others where I could; the Social Media team, once they found
              their footing, pulled over 120,000 views off two reels
              entirely on their own instinct, which only happened because I
              stepped back rather than staying in the middle of it.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionBreak>
        <p className="font-serif-heading text-2xl italic sm:text-3xl">
          &ldquo;The tool can assist, the judgement and the voice have to
          stay human.&rdquo;
        </p>
      </SectionBreak>

      <div className="mx-auto max-w-[45rem] px-6 py-16 sm:py-20">
        <Reveal>
          <p className="kicker mb-3">
            When AI Wrote the Draft
          </p>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              The editorial judgement mattered more than the org chart. For
              the June 2026 issue, a faculty head from ECC sent us an
              article that was entirely AI-generated. It was polished, but
              hollow, with none of her actual voice in it. I rewrote it from
              scratch using her real quotes and input instead, because a
              periodical built on student and staff voices can&rsquo;t run
              something that isn&rsquo;t, in any real sense, hers. It&rsquo;s
              a small decision, but it&rsquo;s the same principle I try to
              bring to my working style: the tool can assist, the judgement
              and the voice have to stay human.
            </p>
            <Extract
              src="/xap/xap-mosaic.jpg"
              width={1148}
              height={873}
              alt="A Mosaic of Art and Culture, by Nirjara Poptani with insights from Prof. Deesha Khetani, XAP June 2026"
              source="XAP · June 2026 · p. 1"
              note="The rewritten piece, bylined “Nirjara Poptani, with insights from Prof. Deesha Khetani, Coordinator ECC”, built from her own quotes rather than the AI draft."
              pdf="/xap-june-2026.pdf"
              page={1}
            />
            <a
              href="/xap-june-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-brass-text hover:underline"
            >
              Read the full June 2026 issue
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-rule pt-10">
            <p className="kicker mb-3">
              The Hardest Call
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              The hardest editorial call I made was in an interview with
              Nandini Ranpara, marketing head (2023-2025) and ECC head
              (2025-2026). The tone in the first two drafts, written by our
              interviewer, didn&rsquo;t match the work she&rsquo;d actually
              done, and read like it was undermining her rather than
              representing her fairly. I sent it back twice. When the tone
              still wasn&rsquo;t right on the third pass, I made the call to
              hand it to someone else entirely rather than publish something
              that painted Nandini in a bad light. It cost us time and a
              full rewrite, but the alternative was running a piece that
              misrepresented someone who&rsquo;d trusted us with her story.
            </p>
            <Extract
              src="/xap/xap-nandini.jpg"
              width={1600}
              height={1416}
              alt="Fests, Memories and Secrets: with Nandni Ranpara, XAP June 2026 interview"
              source="XAP · June 2026 · p. 3"
              note="The published interview, reassigned to a new writer after three drafts that did not represent her fairly."
              pdf="/xap-june-2026.pdf"
              page={3}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-rule pt-10">
            <p className="kicker mb-3">
              Small Decisions, Structural Weight
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Some of my best editorial decisions were smaller and more
              structural. On the November 2025 issue&rsquo;s spread on media
              and misogyny, I curated the pull-quotes at the bottom of the
              page myself (lines from Napoleon, Plato), deliberately placing
              celebrated, &ldquo;respected&rdquo; men&rsquo;s words about
              women directly beneath the articles, so the contradiction did
              the arguing instead of the copy having to state it outright.
              On page six of the June 2026 issue, I balanced tone across the
              page letting a couple of pieces run conversational and
              Hinglish-inflected, with titles like &ldquo;enemies to
              lovers,&rdquo; so the two more serious pieces beside them would
              land harder by contrast rather than getting lost in a wall of
              heavy reading.
            </p>
            <Extract
              src="/xap/xap-wise-men.jpg"
              width={1600}
              height={585}
              alt="Wise Men, Missing the Point: pull-quote strip with lines from Shaw, Napoleon, Wilde and Plato beneath the media and misogyny spread, XAP November 2025"
              source="XAP · November 2025 · pp. 4–5"
              note="The curated pull-quote strip: lines from Napoleon, Plato, Shaw and Wilde, alongside film dialogue, set directly beneath the articles on media and misogyny."
              pdf="/xap-november-2025.pdf"
              page={4}
            />
            <Extract
              src="/xap/xap-page-six.jpg"
              width={1600}
              height={1212}
              alt="Page six of XAP June 2026: Is AI Killing the VIBE? beside The Academic Enemies to Lovers"
              source="XAP · June 2026 · p. 6"
              note="Tone balanced across one page: the conversational, Hinglish-inflected “Is AI Killing the VIBE?” beside “The Academic Enemies to Lovers”."
              pdf="/xap-june-2026.pdf"
              page={5}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-rule pt-10">
            <p className="kicker mb-3">
              Writing, Not Just Editing
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              I wrote, too, not just edited. The November issue&rsquo;s
              opening piece, on womanhood at Xavier&rsquo;s and in general,
              was mine — continued a page later under &ldquo;Oh Woman, Where
              Do You Come From?&rdquo; I interviewed our then-principal, Fr.
              Dr. David Roy, myself, edited the interview with our Vice
              Principal, Dr. Mallika Sanyal, choosing the callout quote that
              anchored the page. Earlier, as Junior Editor, I wrote a full
              piece on India&rsquo;s diversity for the August–September
              issue, captioned a spread on bizarre festivals from around the
              world for October, and reviewed a politically charged film for
              November 2024 without letting the review become an argument
              about politics it didn&rsquo;t need to have.
            </p>

            <div className="mt-10 flex flex-col gap-10">
              <Extract
                src="/xap/xap-nov-cover.jpg"
                width={1600}
                height={1100}
                alt="XAP November 2025 front page: Womanhood and The World by Nirjara Poptani, and Father David interviewed by Nirjara Poptani and Niki Raval"
                source="XAP · November 2025 · cover"
                note="The issue’s opening piece, “Womanhood & The World: Xavier’s & Beyond”, and the interview with Fr. Dr. David Roy, both bylined Nirjara Poptani."
                pdf="/xap-november-2025.pdf"
                page={1}
              />
              <figure className="group overflow-hidden rounded border border-rule shadow-md shadow-navy/10">
                <Image
                  src="/xap-india-diversity.jpg"
                  alt="'India: An Ombre of Diversity', by Nirjara Poptani, XAP August–September 2024 issue"
                  width={1600}
                  height={1392}
                  className="w-full"
                />
                <figcaption className="bg-mist px-5 py-4 text-sm font-medium text-ink-soft">
                  &ldquo;India: An Ombre of Diversity&rdquo; — Aug–Sept 2024
                </figcaption>
              </figure>

              <figure className="group overflow-hidden rounded border border-rule shadow-md shadow-navy/10">
                <Image
                  src="/xap-sabarmati-review.jpg"
                  alt="Movie review of 'The Sabarmati Report', by Nirjara Poptani, XAP November 2024 issue"
                  width={1600}
                  height={1070}
                  className="w-full"
                />
                <figcaption className="bg-mist px-5 py-4 text-sm font-medium text-ink-soft">
                  &ldquo;The Sabarmati Report&rdquo; review — Nov 2024
                </figcaption>
              </figure>

              <figure className="group overflow-hidden rounded border border-rule shadow-md shadow-navy/10">
                <Image
                  src="/xap-festivals-spread.jpg"
                  alt="'Around The World In Eight Celebrations' spread, by Nirjara Poptani and Shinjini Chaturvedi, XAP October 2024 issue"
                  width={1600}
                  height={1019}
                  className="w-full"
                />
                <figcaption className="bg-mist px-5 py-4 text-sm font-medium text-ink-soft">
                  &ldquo;Around The World In Eight Celebrations&rdquo; — Oct
                  2024
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-rule pt-10">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Both the November 2025 and June 2026 issues carry my layout
              work too. I sketched the page structure for each, planned
              space for late-breaking articles and ads, and made the calls
              on what ran where. When I graduated, I left a team that could
              run without me. But if I had to point to the actual work,
              it&rsquo;s not the structure. It&rsquo;s a housekeeping
              interview handled with care, an AI-written article that got a
              human voice back, and an interview I refused to publish until
              it did right by the person in it.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
