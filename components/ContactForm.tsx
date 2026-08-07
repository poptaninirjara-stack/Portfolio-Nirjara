"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:poptaninirjara@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm text-navy/60">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-navy/20 bg-white/50 px-4 py-3 text-navy outline-none transition-colors focus:border-accent-slate"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-navy/60">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-navy/20 bg-white/50 px-4 py-3 text-navy outline-none transition-colors focus:border-accent-slate"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-navy/60">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-lg border border-navy/20 bg-white/50 px-4 py-3 text-navy outline-none transition-colors focus:border-accent-slate"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-fit rounded-full bg-accent-brass px-8 py-3 text-sm font-medium text-ivory transition-opacity hover:opacity-90"
      >
        Send
      </button>
    </form>
  );
}
