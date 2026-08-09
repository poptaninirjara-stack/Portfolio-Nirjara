import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-page-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-navy/70 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif-heading text-base text-navy/90 italic">
          Let&rsquo;s create impact
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="https://linkedin.com/in/nirjarap"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-slate"
          >
            LinkedIn
          </a>
          <a
            href="/Nirjara-Poptani-Resume.pdf"
            download
            className="transition-colors hover:text-accent-slate"
          >
            Resume
          </a>
          <Link href="/contact" className="transition-colors hover:text-accent-slate">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-navy/10 px-6 py-4 text-center text-xs text-navy/50">
        © {new Date().getFullYear()} Nirjara Poptani. All rights reserved.
      </div>
    </footer>
  );
}
