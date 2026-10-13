import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "About: researcher and editor",
  description:
    "About Nirjara Poptani: MA English Literature at Fergusson College, research in Indian narratives, and a background in editing and writing.",
  path: "/about",
  type: "profile",
});

const education = [
  { dates: "2026–2028", title: "MA, English Literature", org: "Fergusson College (Autonomous), Pune" },
  { dates: "2023–2026", title: "BA, English Literature", org: "St. Xavier’s College (Autonomous), Ahmedabad" },
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHeader title="About" />

      <div className="mx-auto grid max-w-[45rem] grid-cols-1 gap-10 px-6">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="relative h-[200px] w-[160px] shrink-0 overflow-hidden rounded border border-rule">
              <Image
                src="/nirjara-portrait.jpg"
                alt="Portrait of Nirjara Poptani"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div className="space-y-5 text-base leading-[1.7] text-ink-soft sm:text-[1.0625rem]">
              {/* Author’s own text, from "About me.docx". */}
              <p>
                Every word carries a worldview, and I&rsquo;ve spent four-plus years
                across brands to spot what it is. At brands like Chaakri I built an
                authentic voice as the Lead Copywriter; as a senior editor for
                Xavier&rsquo;s Ahmedabad Periodical (XAP) and Esteem Publication, I
                know where to cut, where to add, and where a sentence is quietly doing
                more than it admits. Beyond that, I also know how an essay conveys a
                narrative, personal or philosophical through my work at Ivy Prep.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-5 text-base leading-[1.7] text-ink-soft sm:text-[1.0625rem]">
            <p>
              Now I take that eye to research. I&rsquo;m an MA English Literature
              student at Fergusson College, Pune, after a BA at St. Xavier&rsquo;s,
              Ahmedabad, working in the intersection of Indian literary studies and the
              social sciences. Broadly my areas of interest include disability in
              Indian narratives, and the use of humour in it, to interpret the
              underlying social institutions that govern it in the Indian context;
              another area I am deeply passionate about is creating an alternative
              method of understanding and interpreting, situated in the Indian
              context. This stems from a critique of the Western, Euro-centric
              theories of literary criticism which recent studies have decolonialized.
              An extension to this can be found in my ongoing research of alternative
              histories of colonial India and the formation of identities,
              concentrated on caste narratives.
            </p>
            <p>
              My learnings of the language come largely from my use of it rather than
              what I was taught in the classroom. This use spreads across my diverse
              field of work which testifies that for me everything is a text worth
              analysing and deconstructing. Which is why I treat theory like copy: it
              has an author, an audience and an agenda.
            </p>
            <p className="border-t border-rule pt-6 text-sm">
              <Link href="/research" className="text-link">
                Research
              </Link>
              {" · "}
              <Link href="/writing" className="text-link">
                Writing and editing
              </Link>
              {" · "}
              <Link href="/cv" className="text-link">
                CV
              </Link>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <section aria-labelledby="education" className="border-t border-rule pt-8">
            <h2 id="education" className="font-serif-heading text-2xl font-medium text-navy">
              Education
            </h2>
            <dl className="mt-5 divide-y divide-rule">
              {education.map((e) => (
                <div key={e.title} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                  <dt className="text-sm text-ink-soft tabular-nums">{e.dates}</dt>
                  <dd>
                    <p className="font-medium text-navy">{e.title}</p>
                    <p className="text-sm text-ink-soft">{e.org}</p>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="font-serif-heading mt-10 border-t border-rule pt-8 text-center text-2xl text-navy italic">
              Nirjara: A Researcher and Editor
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
