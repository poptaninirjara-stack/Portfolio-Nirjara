import Reveal from "@/components/Reveal";
import CategoryTag from "@/components/CategoryTag";
import SectionBreak from "@/components/SectionBreak";

export const metadata = {
  title: "Ivy Prep — Nirjara Poptani",
};

export default function IvyPrepPage() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-14 sm:pt-24">
        <Reveal>
          <div className="mb-5 flex flex-wrap gap-2">
            <CategoryTag label="Editorial" />
            <CategoryTag label="Coaching" />
          </div>
          <h1 className="font-serif-heading text-3xl font-semibold text-navy sm:text-4xl">
            Ivy Prep
          </h1>
          <p className="mt-2 text-sm text-navy/50">
            Essay Editing · Academic Coaching · Until May 2026
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-navy/85 sm:text-lg">
            <p>
              At Ivy Prep, I worked with two very different kinds of student
              writing. One was UCAS and UK-bound applications, where the
              final edit and review mattered most, tightening what was
              already largely there. The other was US summer school
              applications, where students had to write about their academic
              and extracurricular achievements, and, more importantly, about
              the process behind them: what the experience actually taught
              them, and how it changed them. This mattered more for US
              applications specifically, where growth as a person carries as
              much weight as the achievement itself, versus the more
              quantitative expectations of UK applications.
            </p>
            <p>
              Most students wrote a first draft after a session of
              brainstorming, and I&rsquo;d come back with specific feedback
              on the parts that needed it, along with minor tweaks of my
              own. One recurring problem was AI. So many students had grown
              used to leaning on it that their stories started sounding
              alike, flattened into the same tone and structure regardless
              of who was actually writing. Catching that, and pushing
              students back toward their own voice, became a consistent part
              of the feedback I gave.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionBreak>
        <p className="font-serif-heading text-2xl italic sm:text-3xl">
          &ldquo;Catching that, and pushing students back toward their own
          voice, became a consistent part of the feedback I gave.&rdquo;
        </p>
      </SectionBreak>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Reveal>
          <p className="mb-2 text-sm tracking-wide text-accent-brass uppercase">
            The John Locke Institute Essay
          </p>
          <div className="space-y-6 text-base leading-relaxed text-navy/85 sm:text-lg">
            <p>
              That problem is part of why the John Locke Institute essay
              stands out. I worked with three students on their submissions,
              one in economics, one in philosophy or political relations,
              and one in psychology. The question for psychology was: why do
              we care for our bodies after death? It was her first academic
              argumentative essay, let alone for a competition of that
              calibre, so before we even touched the topic, we spent a
              session or two just on academic writing: structure, argument,
              language.
            </p>
            <p>
              We started circling ideas around body, mind, soul, religion,
              the obvious territory. But she wanted a different angle, so I
              took her through post-humanist theory, Foucault and Derrida,
              ideas of power, control and conditioning, and we built an
              argument around how institutions of power condition people to
              care for their bodies, and why. We backed it with quantitative
              evidence to give the argument weight, and stuck strictly to
              academic sources for citations, even where we&rsquo;d skimmed
              other material along the way. After the first draft, we
              reviewed it together, tightened it for readability, and
              prepared a second. Then came the final citations, the
              reference list, and two full proofreads before submission. AI
              had almost no role in any of it. In June, she was shortlisted
              for the academic conference in London, one of a small number
              chosen per category to present before a winner is picked.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-navy/10 pt-10">
            <p className="mb-2 text-sm tracking-wide text-accent-brass uppercase">
              Undergraduate Journal Program
            </p>
            <p className="text-base leading-relaxed text-navy/85 sm:text-lg">
              The Undergraduate Journal Program ran alongside this.
              It&rsquo;s a three-part series, each part built around a
              different aspect of a student&rsquo;s life, meant to document
              their stories and achievements in their own words, so that by
              the time they sit down to write their actual application
              essays (eight per college), they already have material to draw
              from instead of starting cold. Most students had simply never
              been asked the kind of questions the journal poses, so a lot
              of the work was helping them brainstorm, sometimes one-on-one,
              sometimes in joint sessions with parents and the head
              counsellor, to get real depth out of their answers. Each part
              ran on a strict timeline, which I tracked, following up with
              students who were falling behind to help them find the time
              and still give considered answers rather than rushed ones.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-navy/10 pt-10">
            <p className="mb-2 text-sm tracking-wide text-accent-brass uppercase">
              Building a Blog From Nothing
            </p>
            <p className="text-base leading-relaxed text-navy/85 sm:text-lg">
              The blog-building work came in almost as an afterthought, but I
              enjoyed it more than expected. I set up a student&rsquo;s
              WordPress account and built her site from scratch, then worked
              with her to figure out what to actually write about: what she
              liked, what she was good at, what shaped her. We wrote her
              About Me page together, then moved into blog posts about her
              life as a teenager, the classes she&rsquo;d taken, trips
              she&rsquo;d been on. She&rsquo;d barely written before this and
              was quiet, an introvert who found it genuinely difficult to
              open up on the page, but she was self-driven, and after a few
              sessions, she started producing good, honest writing on her
              own.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-navy/10 pt-10">
            <p className="text-base leading-relaxed text-navy/85 sm:text-lg">
              By May 2026, when I left Ivy Prep to begin my Master&rsquo;s,
              the work had taken a few different shapes, essay editing,
              academic coaching, a journal program, even a blog built from
              nothing, but the thread running through all of it was the
              same: helping a student find a version of their own voice that
              was actually theirs.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
