"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { Select } from "@/components/ui/Select";
import { domainOptions } from "@/lib/content";

const audienceOptions = ["Working professionals", "Managers & leaders", "College students", "School students", "Teachers & educators", "Individuals", "Groups & communities"];
const languageOptions = ["English", "Hindi", "Kannada", "Tamil", "Telugu", "Malayalam", "Marathi", "Bengali", "Gujarati", "Punjabi", "Urdu"];
const formatOptions = ["Online", "Offline / In-person", "Hybrid", "Can be discussed"];

export function JoinForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [audiences, setAudiences] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>(["English"]);
  const [formats, setFormats] = useState<string[]>(["Online"]);
  const [domain, setDomain] = useState("");
  const [years, setYears] = useState("");

  const toggle = (value: string, list: string[], set: (next: string[]) => void) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  if (done) {
    return (
      <div className="flex min-h-[30rem] flex-col items-start justify-center gap-4 border border-ink/15 bg-cream p-8 sm:p-10">
        <span className="grid size-12 place-items-center rounded-full bg-forest text-cream">
          <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="label text-accent">Profile preview complete</span>
        <h2 className="max-w-md font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.03em]">
          Your expertise is ready to be discovered.
        </h2>
        <p className="max-w-md text-[0.9rem] leading-relaxed text-ink-2">
          This is a demonstration form, so nothing has been submitted. On the live platform, your profile would be
          reviewed and published to the network.
        </p>
        <button type="button" onClick={() => { setDone(false); setStep(1); }} className="mt-2 text-[0.8rem] font-semibold text-accent underline underline-offset-4">
          Start again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (step === 1) {
          setStep(2);
          return;
        }
        setDone(true);
      }}
      className="border border-ink/15 bg-cream"
    >
      <div className="flex items-center justify-between border-b border-ink/15 px-6 py-4 sm:px-8">
        <span className="label text-accent">Create your profile</span>
        <div className="flex items-center gap-2">
          {[1, 2].map((n) => (
            <span key={n} className={`grid size-6 place-items-center rounded-full text-[0.6rem] ${step >= n ? "bg-ink text-cream" : "border border-ink/20 text-muted"}`}>
              {n}
            </span>
          ))}
          <span className="label ml-1 text-[0.55rem] text-muted">{step} / 2</span>
        </div>
      </div>

      <div className="px-6 py-6 sm:px-8">
        {step === 1 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" id="join-name">
              <input id="join-name" name="name" required autoComplete="name" className="form-line" placeholder="Full name" />
            </Field>
            <Field label="Email address" id="join-email">
              <input id="join-email" name="email" type="email" required autoComplete="email" className="form-line" placeholder="you@example.com" />
            </Field>
            <Field label="Phone" id="join-phone">
              <input id="join-phone" name="phone" type="tel" autoComplete="tel" className="form-line" placeholder="+91" />
            </Field>
            <Field label="Base city" id="join-city">
              <input id="join-city" name="city" required className="form-line" placeholder="e.g. Bengaluru" />
            </Field>
            <Field label="Primary training domain" id="join-domain">
              <Select
                id="join-domain"
                name="domain"
                value={domain}
                onChange={setDomain}
                placeholder="Select a domain"
                options={domainOptions}
                buttonClassName="form-line"
                ariaLabel="Primary training domain"
              />
            </Field>
            <Field label="Years of experience" id="join-years">
              <Select
                id="join-years"
                name="years"
                value={years}
                onChange={setYears}
                placeholder="Select"
                options={["Less than 1 year", "1–3 years", "4–7 years", "8–15 years", "More than 15 years"]}
                buttonClassName="form-line"
                ariaLabel="Years of experience"
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Professional headline" id="join-headline">
                <input id="join-headline" name="headline" className="form-line" placeholder="Role + core expertise + audience, e.g. Leadership facilitator | First-time managers" />
              </Field>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div>
              <span className="label text-[0.56rem] text-muted">Who do you work with?</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {audienceOptions.map((a) => (
                  <Chip key={a} active={audiences.includes(a)} onClick={() => toggle(a, audiences, setAudiences)}>{a}</Chip>
                ))}
              </div>
            </div>

            <div>
              <span className="label text-[0.56rem] text-muted">Languages you deliver in</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {languageOptions.map((l) => (
                  <Chip key={l} active={languages.includes(l)} onClick={() => toggle(l, languages, setLanguages)}>{l}</Chip>
                ))}
              </div>
            </div>

            <div>
              <span className="label text-[0.56rem] text-muted">How do you deliver?</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {formatOptions.map((f) => (
                  <Chip key={f} active={formats.includes(f)} onClick={() => toggle(f, formats, setFormats)}>{f}</Chip>
                ))}
              </div>
            </div>

            <Field label="A short professional introduction" id="join-bio">
              <textarea id="join-bio" name="bio" required rows={4} className="form-line resize-none" placeholder="What do you help people learn or improve? Who do you work with? How do you work?" />
            </Field>

            <label className="flex items-start gap-3 text-[0.72rem] leading-relaxed text-muted">
              <input type="checkbox" required className="mt-0.5 size-3.5 shrink-0 accent-[var(--color-accent)]" />
              I agree to the terms and conditions and understand that profile information should be accurate.
            </label>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-ink/15 px-6 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          className={`text-[0.78rem] font-semibold text-muted transition-colors hover:text-ink ${step === 1 ? "invisible" : ""}`}
        >
          ← Back
        </button>
        <button type="submit" className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[0.8rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent">
          {step === 1 ? "Continue" : "Complete profile"}
          <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="label text-[0.56rem] text-muted">{label}</label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1.5 text-[0.7rem] transition-colors duration-300 ${
        active ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink-2 hover:border-ink/50"
      }`}
    >
      {children}
    </button>
  );
}
