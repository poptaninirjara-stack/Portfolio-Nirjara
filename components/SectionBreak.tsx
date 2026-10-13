import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** A light mist band for pull lines. The dark band is reserved for the contact strip. */
export default function SectionBreak({ children }: { children: ReactNode }) {
  return (
    <section className="border-y border-rule bg-mist py-16 text-navy sm:py-20">
      <div className="mx-auto max-w-[45rem] px-6 text-center">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
