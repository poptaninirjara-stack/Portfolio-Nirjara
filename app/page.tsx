import Image from "next/image";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";

const workPreview = [
  {
    name: "Chaakri",
    stat: "Increased reach by 76%",
    href: "/work/chaakri",
    featured: true,
  },
  {
    name: "Ivy Prep",
    stat: "20+ essays edited, 14+ students coached",
    href: "/work/ivy-prep",
  },
  {
    name: "XAP",
    stat: "Curated and edited 30+ articles for a periodical",
    href: "/work/xap",
  },
  {
    name: "Esteem",
    stat: "Edited Peter Pan for publication",
    href: "/work#esteem-social-digest",
  },
  {
    name: "Social Digest",
    stat: "Edited 15+ articles for WordPress publication",
    href: "/work#esteem-social-digest",
  },
  {
    name: "Sane Creative Studio",
    stat: "Handled copy for 30+ real estate clients",
    href: "/work#sane-creative-studio",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-36 sm:pb-28">
        <Reveal>
          <h1 className="font-serif-heading max-w-3xl text-4xl leading-[1.15] font-semibold text-navy sm:text-6xl sm:leading-[1.1]">
            A writer who edits, and an editor who writes.
          </h1>
        </Reveal>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-14">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-navy/10 sm:h-32 sm:w-32">
              <Image
                src="/nirjara-photo.jpg"
                alt="Nirjara Poptani"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-navy/85 sm:text-lg">
              <p>
                Every word carries significance in communicating narratives
                and brand voice, and I&rsquo;ve spent four years making sure
                mine sells. As an editor, I know just where to chop and where
                to add, to polish the soul of the copy.
              </p>
              <p>
                I&rsquo;m a Literature grad who learnt more about language
                while writing than in books — which means the copy I write
                lands across diverse audiences and contexts, whether
                that&rsquo;s students, real estate investors, or
                health-conscious snackers.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Work preview */}
      <section className="mx-auto max-w-5xl px-6 pb-28 sm:pb-36">
        <Reveal>
          <h2 className="font-serif-heading mb-10 text-2xl font-medium text-navy sm:text-3xl">
            Selected work
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workPreview.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05} className="h-full">
              <WorkCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
