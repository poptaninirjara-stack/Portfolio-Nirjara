import Link from "next/link";

export default function RequestButton({
  item,
  label = "Request manuscript",
}: {
  /** Slug of the item, so the contact form can name it in the message. */
  item?: string;
  label?: string;
}) {
  const href = item
    ? `/contact?type=manuscript&item=${encodeURIComponent(item)}`
    : "/contact?type=manuscript";
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-sm border border-navy px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-paper"
    >
      {label}
      <span aria-hidden>→</span>
    </Link>
  );
}
