import Link from "next/link";

/** "← Section" link shown at the top of inner pages. */
export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <p className="mb-6">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-navy"
      >
        <span aria-hidden className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        {label}
      </Link>
    </p>
  );
}
