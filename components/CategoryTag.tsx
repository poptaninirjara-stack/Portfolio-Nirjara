export default function CategoryTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-sm border border-rule bg-paper/60 px-2 py-0.5 text-xs text-ink-soft">
      {label}
    </span>
  );
}
