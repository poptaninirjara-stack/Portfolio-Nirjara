import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Nirjara Poptani",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-16 pb-28 sm:pt-24">
      <Reveal>
        <h1 className="font-serif-heading text-4xl font-semibold text-navy sm:text-5xl">
          Contact
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-navy/80 sm:text-lg">
          Every good piece starts with a conversation. Tell me a little about
          what you&rsquo;re working on, and I&rsquo;ll get back to you soon.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-navy/10 pt-8 text-sm text-navy/70">
          <a
            href="/Nirjara-Poptani-Resume.pdf"
            download
            className="transition-colors hover:text-accent-slate"
          >
            Download resume
          </a>
          <a
            href="mailto:poptaninirjara@gmail.com"
            className="transition-colors hover:text-accent-slate"
          >
            poptaninirjara@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/nirjarap"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-slate"
          >
            linkedin.com/in/nirjarap
          </a>
        </div>
      </Reveal>
    </div>
  );
}
