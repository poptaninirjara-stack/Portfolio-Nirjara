"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** A <details> that opens itself when the URL hash points at it. */
export default function HashDetails({
  id,
  summary,
  children,
  className,
}: {
  id: string;
  summary: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const open = () => {
      if (window.location.hash === `#${id}` && ref.current) {
        ref.current.open = true;
        ref.current.scrollIntoView();
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, [id]);

  return (
    <details ref={ref} id={id} className={`group scroll-mt-28 ${className ?? ""}`}>
      <summary className="flex items-center justify-between gap-4 py-4">
        {summary}
        <span aria-hidden className="text-xl text-slate transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      {children}
    </details>
  );
}
