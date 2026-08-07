"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-page-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif-heading text-lg font-semibold tracking-tight text-navy"
          onClick={() => setOpen(false)}
        >
          Nirjara Poptani
        </Link>

        <nav className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-accent-slate ${
                pathname === link.href
                  ? "text-navy font-medium"
                  : "text-navy/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-navy" />
          <span className="h-px w-6 bg-navy" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy/10 px-6 py-3 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-navy/80"
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
