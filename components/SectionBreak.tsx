import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function SectionBreak({ children }: { children: ReactNode }) {
  return (
    <section className="bg-section-navy py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
