import { statusLabel, type Status } from "@/lib/content/types";

const styles: Record<Status, string> = {
  published: "border-navy bg-navy text-paper",
  "under-review": "border-brass-text text-brass-text",
  "in-preparation": "border-dashed border-slate text-slate",
  ongoing: "border-slate bg-slate text-paper",
  restricted: "border-rule text-ink-soft",
};

export default function StatusChip({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[0.7rem] font-medium tracking-[0.08em] uppercase ${styles[status]}`}
    >
      {statusLabel[status]}
    </span>
  );
}
