import Image from "next/image";
import Reveal from "@/components/Reveal";
import CategoryTag from "@/components/CategoryTag";
import PullQuote from "@/components/PullQuote";
import SectionBreak from "@/components/SectionBreak";
import InstagramEmbed from "@/components/InstagramEmbed";

export const metadata = {
  title: "Chaakri — Nirjara Poptani",
};

export default function ChaakriPage() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-14 sm:pt-24">
        <Reveal>
          <div className="mb-5 flex flex-wrap gap-2">
            <CategoryTag label="Brand Identity" />
            <CategoryTag label="Content Strategy" />
            <CategoryTag label="Writing" />
          </div>
          <h1 className="font-serif-heading text-3xl font-semibold text-navy sm:text-4xl">
            Chaakri
          </h1>
          <p className="mt-2 text-sm text-navy/50">2021–Present</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif-heading mt-12 text-2xl font-medium text-navy sm:text-3xl">
            Four Years, Zero Invoices
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-navy/85">
            <p>
              Chaakri is an ethical brand run by Shramik Naari Sangh, an NGO
              supporting women garment workers. Since 2021, the work here has
              been pro bono, start to finish: brand voice, content strategy,
              and copy across four campaigns, without a single invoice
              raised. It is the longest-running relationship in this
              portfolio, and the one where the return has never been about
              payment.
            </p>
          </div>
        </Reveal>
      </div>

      <SectionBreak>
        <p className="font-serif-heading text-2xl italic sm:text-3xl">
          Four campaigns, one voice — built for a brand that had never had
          one before.
        </p>
      </SectionBreak>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Campaign 1 */}
        <Reveal>
          <div className="border-t border-navy/10 pt-10">
            <p className="mb-2 text-sm tracking-wide text-accent-brass uppercase">
              Campaign 1
            </p>
            <h3 className="font-serif-heading text-2xl font-medium text-navy">
              Raksha Bandhan
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
              A festive campaign built to convert seasonal attention into
              lasting reach for the brand.
            </p>
            <PullQuote>
              3,809 new accounts reached, 6,045 views, 254 likes.
            </PullQuote>
            <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10">
              <video
                controls
                playsInline
                className="w-full"
                src="/chaakri-rakshabandhan.mp4"
              />
            </div>
          </div>
        </Reveal>

        {/* Campaign 2 */}
        <Reveal>
          <div className="mt-16 border-t border-navy/10 pt-10">
            <p className="mb-2 text-sm tracking-wide text-accent-brass uppercase">
              Campaign 2
            </p>
            <h3 className="font-serif-heading text-2xl font-medium text-navy">
              Independence Day 2022
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
              A multilingual rollout across nine videos, paired with sales
              enablement content built to carry the campaign past the
              scroll.
            </p>
            <PullQuote>16.25K views.</PullQuote>
            <div className="mt-8">
              <InstagramEmbed url="https://www.instagram.com/reel/ChR0dRbMR4r/" />
            </div>
          </div>
        </Reveal>

        {/* Campaign 3 */}
        <Reveal>
          <div className="mt-16 border-t border-navy/10 pt-10">
            <p className="mb-2 text-sm tracking-wide text-accent-brass uppercase">
              Campaign 3
            </p>
            <h3 className="font-serif-heading text-2xl font-medium text-navy">
              Topical &amp; Moment Marketing — the &ldquo;Dhurandhar&rdquo;
              post
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
              A moment-marketing post riding a cultural release, tuned to
              land with a non-follower audience rather than just the
              existing base.
            </p>
            <PullQuote>4.9K views, 21% non-follower engagement.</PullQuote>
            <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10">
              <Image
                src="/chaakri-dhurandhar.jpg"
                alt="Chaakri topical moment-marketing post referencing the film Dhurandhar"
                width={1080}
                height={1350}
                className="w-full"
              />
            </div>
          </div>
        </Reveal>

        {/* Campaign 4 */}
        <Reveal>
          <div className="mt-16 border-t border-navy/10 pt-10">
            <p className="mb-2 text-sm tracking-wide text-accent-brass uppercase">
              Campaign 4
            </p>
            <h3 className="font-serif-heading text-2xl font-medium text-navy">
              &ldquo;I Choose My Colours&rdquo; | EmpoweRED
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/80">
              A three-post campaign built around colour and choice, giving
              the brand&rsquo;s women-led identity a confident, visual
              through-line.
            </p>
            <PullQuote>400+ likes, 2.9K views across 3 posts.</PullQuote>
            <div className="mt-8">
              <InstagramEmbed url="https://www.instagram.com/tv/CfjAQAnDxkS/" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
