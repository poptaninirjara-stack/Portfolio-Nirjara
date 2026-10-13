import Image from "next/image";

/** A cropped extract from a published issue, captioned with the point it supports. */
export default function Extract({
  src,
  width,
  height,
  alt,
  source,
  note,
  pdf,
  page,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** e.g. "XAP, November 2025, p. 7" */
  source: string;
  /** The data point the extract supports. */
  note: string;
  pdf?: string;
  page?: number;
}) {
  return (
    <figure className="mt-8 overflow-hidden rounded border border-rule bg-white shadow-md shadow-navy/10">
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 768px) 720px, 100vw" className="w-full" />
      <figcaption className="border-t border-rule bg-mist px-5 py-4">
        <p className="kicker">{source}</p>
        <p className="mt-1 text-sm leading-relaxed text-navy">{note}</p>
        {pdf && (
          <a
            href={page ? `${pdf}#page=${page}` : pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-brass-text hover:underline"
          >
            See the full page →
          </a>
        )}
      </figcaption>
    </figure>
  );
}
