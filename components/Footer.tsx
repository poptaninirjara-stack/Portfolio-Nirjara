import Link from "next/link";
import { profileLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper print:hidden">
      <div className="mx-auto flex max-w-[70rem] flex-col gap-5 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-start sm:justify-between">
        <p className="font-serif-heading max-w-sm text-base text-navy italic">
          {site.availability}
        </p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-slate">
              {site.email}
            </a>
          </li>
          {profileLinks().map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-slate"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/cv" className="transition-colors hover:text-slate">
              CV
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition-colors hover:text-slate">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-rule px-6 py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
