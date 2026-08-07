import Link from "next/link";
import Reveal from "@/components/Reveal";
import CategoryTag from "@/components/CategoryTag";

export const metadata = {
  title: "Services — Nirjara Poptani",
};

const services = [
  {
    name: "Copywriting",
    tag: "Writing",
    description:
      "Brand copy, campaign taglines, and ad copy that sound like they were written for the people meant to read them.",
  },
  {
    name: "Copyediting",
    tag: "Editorial",
    description:
      "Line edits and structural feedback that sharpen the piece without losing the writer's voice.",
  },
  {
    name: "Content Strategy & Brand Voice Development",
    tag: "Strategy",
    description:
      "Building a consistent voice across platforms, and the editorial calendars that keep it running.",
  },
  {
    name: "Scriptwriting",
    tag: "AV Script",
    description:
      "Audio-visual and reel scripts written for how people actually watch, not just read.",
  },
  {
    name: "Editorial Management",
    tag: "Leadership",
    description:
      "Team coordination, content curation, and production oversight, from first draft to final print.",
  },
  {
    name: "Academic & Application Editing",
    tag: "Coaching",
    description:
      "Essay editing and writing coaching for students, with a focus on structure, clarity, and finding the real story.",
  },
  {
    name: "Social Media Content",
    tag: "Social Campaign",
    description:
      "Captions, post copy, and campaign content built for platform and audience, not just word count.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">
          Services
        </h1>
      </Reveal>

      <div className="mt-16 flex flex-col divide-y divide-navy/10">
        {services.map((service, i) => (
          <Reveal key={service.name} delay={i * 0.04}>
            <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[1fr_2fr] sm:gap-8">
              <div className="flex flex-col items-start gap-3 sm:sticky sm:top-24">
                <CategoryTag label={service.tag} />
                <h2 className="font-serif-heading text-xl font-medium text-navy sm:text-2xl">
                  {service.name}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-navy/80 sm:text-lg">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 border-t border-navy/10 pt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-base text-accent-brass"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
