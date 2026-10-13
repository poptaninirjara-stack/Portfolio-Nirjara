import Link from "next/link";
import { profileLinks, site } from "@/lib/site";

/** The one dark band on a page: the closing contact strip. */
export default function ContactStrip() {
  const linkClass =
    "underline decoration-ivory/30 underline-offset-4 transition-colors hover:decoration-ivory";
  return (
    <section aria-labelledby="contact-strip" className="bg-deep text-ivory print:hidden">
      <div className="mx-auto grid max-w-[70rem] gap-8 px-6 py-16 sm:py-20 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.12em] text-ivory/75 uppercase">
            Get in touch
          </p>
          <h2
            id="contact-strip"
            className="font-serif-heading mt-3 text-3xl leading-tight font-medium sm:text-4xl"
          >
            Research collaborations, internships and RA roles.
          </h2>
        </div>
        <ul className="flex flex-col gap-3 text-base md:items-end">
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </li>
          {profileLinks().map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/cv" className={linkClass}>
              CV
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
