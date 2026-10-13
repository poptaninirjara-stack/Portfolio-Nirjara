"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/writing", label: "Writing" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-[70rem] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif-heading text-lg font-semibold tracking-tight text-navy"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm tracking-wide transition-colors hover:text-slate ${
                isActive(link.href)
                  ? "font-medium text-navy underline decoration-brass decoration-2 underline-offset-[6px]"
                  : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-navy" />
          <span className="h-px w-6 bg-navy" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="flex flex-col gap-1 border-t border-rule px-6 py-3 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`py-2 text-base ${
                isActive(link.href) ? "font-medium text-navy" : "text-ink-soft"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
