"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

export function ContactForm() {
  const params = useSearchParams();
  const subject = params.get("subject");
  const [sent, setSent] = useState(false);
  const [kind, setKind] = useState("I'm looking for a trainer");

  if (sent) {
    return (
      <div className="flex min-h-[26rem] flex-col items-start justify-center gap-4 border border-ink/15 bg-cream p-8">
        <span className="grid size-12 place-items-center rounded-full bg-forest text-cream">
          <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="font-display text-[2rem] leading-none tracking-[-0.03em]">Thank you — your query is in.</h2>
        <p className="max-w-sm text-[0.9rem] leading-relaxed text-ink-2">
          This is a demonstration form, so nothing has been sent. On the live site, the team would reply within one
          working day.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-2 text-[0.8rem] font-semibold text-accent underline underline-offset-4">
          Send another query
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="border border-ink/15 bg-cream p-6 sm:p-8"
    >
      <span className="label text-accent">Send your query</span>
      <p className="mt-2 font-display text-[1.55rem] leading-[1.1] tracking-[-0.03em]">
        Tell us what you need. We&apos;ll help you find the fit.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" id="name">
          <input id="name" name="name" required autoComplete="name" className="form-line" placeholder="Full name" />
        </Field>
        <Field label="Email address" id="email">
          <input id="email" name="email" type="email" required autoComplete="email" className="form-line" placeholder="you@organisation.com" />
        </Field>
        <Field label="Phone (optional)" id="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="form-line" placeholder="+91" />
        </Field>
        <Field label="Organisation (optional)" id="organisation">
          <input id="organisation" name="organisation" className="form-line" placeholder="Company, school, NGO…" />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="label text-[0.56rem] text-muted">I am</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {["I'm looking for a trainer", "I want to join as a trainer", "Something else"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setKind(option)}
              className={`rounded-full border px-3.5 py-1.5 text-[0.7rem] transition-colors duration-300 ${
                kind === option ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink-2 hover:border-ink/50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <Field label="Your message" id="message">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            defaultValue={subject ? `Enquiry regarding ${subject}` : ""}
            className="form-line resize-none"
            placeholder="Topic, audience, location, preferred dates — anything that helps us understand the requirement."
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-ink/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[16rem] text-[0.65rem] leading-relaxed text-muted">
          By sending this query you agree to our privacy policy. No spam, ever.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[0.82rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent"
        >
          Send query
          <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="label text-[0.56rem] text-muted">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
