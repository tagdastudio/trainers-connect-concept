"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="flex w-full max-w-md items-center gap-2 border-b border-cream/30 pb-2"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder={done ? "Thank you — we'll be in touch." : "Your email address"}
        disabled={done}
        className="w-full bg-transparent py-2 text-[0.92rem] text-cream placeholder:text-cream/60 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe to the journal"
        className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/35 transition-colors duration-500 hover:bg-gold hover:text-forest"
      >
        <Arrow className="size-3.5" />
      </button>
    </form>
  );
}

export function FooterNewsletterNote() {
  return <span className="label text-cream/60">Occasional notes, no noise. {site.shortName} Journal.</span>;
}
