"use client";

import { useEffect, useState } from "react";

const MS_PER_CHAR = 85;

export default function TypewriterHero({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(text.length);
      return;
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
    <h1 className="font-serif-heading max-w-3xl text-4xl leading-[1.15] font-semibold text-navy sm:text-6xl sm:leading-[1.1]">
      <span aria-hidden>
        {text.slice(0, count)}
        <span
          className={`ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-accent-brass align-middle ${
            done ? "animate-pulse" : "opacity-100"
          }`}
        />
      </span>
      <span className="sr-only">{text}</span>
    </h1>
  );
}
