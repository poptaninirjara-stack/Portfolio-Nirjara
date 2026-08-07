export default function CategoryTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-accent-slate/40 px-3 py-1 text-xs tracking-wide text-accent-slate uppercase">
      {label}
    </span>
  );
}
