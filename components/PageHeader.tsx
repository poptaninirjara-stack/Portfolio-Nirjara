import type { ReactNode } from "react";
import BackLink from "@/components/BackLink";

export default function PageHeader({
  kicker,
  title,
  children,
  wide = false,
  back,
}: {
  kicker?: string;
  title: ReactNode;
  children?: ReactNode;
  wide?: boolean;
  back?: { href: string; label: string };
}) {
  return (
    <header className={`mx-auto px-6 pt-16 pb-10 sm:pt-24 ${wide ? "max-w-[70rem]" : "max-w-[45rem]"}`}>
      {back && <BackLink {...back} />}
      {kicker && <p className="kicker mb-4">{kicker}</p>}
      <h1 className="font-serif-heading text-4xl leading-[1.1] font-semibold text-navy sm:text-5xl">
        {title}
      </h1>
      {children && (
        <div className="mt-6 max-w-[42rem] space-y-4 text-base leading-[1.7] text-ink-soft sm:text-lg">
          {children}
        </div>
      )}
    </header>
  );
}
