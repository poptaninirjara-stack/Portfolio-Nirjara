"use client";

import { useState, type ReactNode } from "react";
import type { Status } from "@/lib/content/types";

type Filter = "all" | Extract<Status, "published" | "under-review">;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "published", label: "Published" },
  { value: "under-review", label: "Under review" },
];

/**
 * Status filter for the publications list. Items are rendered on the server
 * and passed in with their status, so this only toggles visibility.
 */
export default function PublicationList({
  items,
  emptyPublished,
}: {
  items: { status: Status; node: ReactNode; key: string }[];
  emptyPublished: ReactNode;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = items.filter((i) => filter === "all" || i.status === filter);
  const hasPublished = items.some((i) => i.status === "published");

  return (
    <div>
      <div role="group" aria-label="Filter by status" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const count =
            f.value === "all" ? items.length : items.filter((i) => i.status === f.value).length;
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.value)}
              className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${
                active
                  ? "border-navy bg-navy text-paper"
                  : "border-rule text-ink-soft hover:border-navy/40 hover:text-navy"
              }`}
            >
              {f.label} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8" aria-live="polite">
        {(filter === "all" || filter === "published") && !hasPublished && (
          <div className="border-t border-rule py-6">{emptyPublished}</div>
        )}
        {shown.map((i) => (
          <div key={i.key}>{i.node}</div>
        ))}
      </div>
    </div>
  );
}
