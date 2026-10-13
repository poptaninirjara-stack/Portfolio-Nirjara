"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

export const enquiryTypes = [
  { value: "research", label: "Research collaboration" },
  { value: "internship", label: "Internship or RA enquiry" },
  { value: "manuscript", label: "Request manuscript" },
  { value: "editing", label: "Editing enquiry" },
  { value: "other", label: "Other" },
] as const;

type EnquiryValue = (typeof enquiryTypes)[number]["value"];
type Field = "name" | "email" | "message";

const isEnquiry = (v: string | null): v is EnquiryValue =>
  enquiryTypes.some((t) => t.value === v);

const inputClass =
  "rounded-sm border bg-white/70 px-4 py-3 text-navy outline-none transition-colors focus:border-slate aria-[invalid=true]:border-[#a3352b]";

export default function ContactForm({
  itemTitles,
}: {
  /** slug → title, so ?item= can name the manuscript or essay requested. */
  itemTitles: Record<string, string>;
}) {
  const params = useSearchParams();
  const typeParam = params.get("type");
  const item = params.get("item");
  const itemTitle = item ? itemTitles[item] : undefined;

  const [type, setType] = useState<EnquiryValue>(isEnquiry(typeParam) ? typeParam : "research");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    itemTitle ? `I would like to request a copy of “${itemTitle}”.\n\n` : ""
  );
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  function validate() {
    const next: Partial<Record<Field, string>> = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please write a short message.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    const firstError = (["name", "email", "message"] as Field[]).find((f) => next[f]);
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }
    const typeLabel = enquiryTypes.find((t) => t.value === type)!.label;
    const subject = encodeURIComponent(`${typeLabel}: ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  const fieldProps = (f: Field) => ({
    id: f,
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `${f}-error` : undefined,
  });

  const errorText = (f: Field) =>
    errors[f] ? (
      <p id={`${f}-error`} className="text-sm text-[#a3352b]">
        {errors[f]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div role="alert" aria-live="assertive" className="empty:hidden">
        {errorCount > 0 && (
          <p className="rounded-sm border border-[#a3352b]/40 bg-[#a3352b]/5 px-4 py-3 text-sm text-[#a3352b]">
            Please fix {errorCount === 1 ? "1 field" : `${errorCount} fields`} below.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="text-sm font-medium text-navy">
          Enquiry type
        </label>
        <select
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value as EnquiryValue)}
          className={`${inputClass} border-navy/25`}
        >
          {enquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {type === "manuscript" && (
          <p className="text-sm text-ink-soft">
            Manuscripts and full essays are shared by email for reading and review only.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input
          {...fieldProps("name")}
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputClass} border-navy/25`}
        />
        {errorText("name")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-navy">
          Email
        </label>
        <input
          {...fieldProps("email")}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputClass} border-navy/25`}
        />
        {errorText("email")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          {...fieldProps("message")}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y border-navy/25`}
        />
        {errorText("message")}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="w-fit rounded-sm bg-navy px-7 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Send
        </button>
        <p className="text-sm text-ink-soft">Opens your email app with the message ready to send.</p>
      </div>
    </form>
  );
}
