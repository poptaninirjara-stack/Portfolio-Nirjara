import Link from "next/link";

export default function WorkCard({
  name,
  stat,
  href,
  featured = false,
}: {
  name: string;
  stat: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col justify-between rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1 ${
        featured
          ? "border-transparent bg-card-featured text-navy"
          : "border-navy/10 bg-white/40 text-navy hover:border-accent-slate/40"
      }`}
    >
      <span className="font-serif-heading text-2xl font-medium">{name}</span>
      <span className="mt-6 flex items-center justify-between text-sm">
        <span className={featured ? "text-navy/80" : "text-navy/60"}>{stat}</span>
        <span className="text-accent-brass transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
