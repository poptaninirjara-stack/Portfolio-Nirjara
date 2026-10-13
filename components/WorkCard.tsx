import Link from "next/link";

export default function WorkCard({
  kicker,
  name,
  summary,
  href,
  featured = false,
}: {
  kicker?: string;
  name: string;
  summary: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col rounded border p-6 transition-colors ${
        featured
          ? "border-transparent bg-steel text-navy hover:border-navy/30"
          : "border-rule bg-mist text-navy hover:border-navy/30"
      }`}
    >
      {kicker && (
        <span className={`kicker ${featured ? "text-navy" : ""}`}>{kicker}</span>
      )}
      <span className="font-serif-heading mt-2 text-2xl font-medium">{name}</span>
      <span className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy/85">
        {summary}
      </span>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy">
        Read more
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
