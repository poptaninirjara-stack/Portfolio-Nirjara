import type { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-2 border-accent-brass py-1 pl-6 font-serif-heading text-xl leading-snug text-navy italic sm:text-2xl">
      {children}
    </blockquote>
  );
}
