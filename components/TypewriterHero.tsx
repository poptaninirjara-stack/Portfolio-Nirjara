"use client";

import { useEffect, useState } from "react";

const MS_PER_CHAR = 55;

/**
 * Types out a secondary hero line. Not a heading: the page H1 is the name.
 * The full line is laid out invisibly underneath so the hero never shifts.
 */
export default function TypewriterHero({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const timeout = setTimeout(() => setCount(text.length), 0);
      return () => clearTimeout(timeout);
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(interval);
    }, MS_PER_CHAR);

    return () => clearInterval(interval);
  }, [text]);

  const done = count >= text.length;

  return (
    <p className="font-serif-heading relative text-lg text-slate italic sm:text-xl">
      <span className="sr-only">{text}</span>
      <span aria-hidden className="invisible">
        {text}
      </span>
      <span aria-hidden className="absolute inset-0">
        {text.slice(0, count)}
        <span
          className={`ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-brass align-middle ${
            done ? "animate-pulse" : ""
          }`}
        />
      </span>
    </p>
  );
}
