import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowUpRight } from "@/components/ui/Arrow";
import { site } from "@/lib/site";
import { Reveal } from "@/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Connect with Trainers Connect — for organisations looking for expertise, and trainers ready to be discovered.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Contact"
        title={
          <>
            Are you ready to connect with <em className="flourish">expertise?</em>
          </>
        }
        intro="Whether you're looking for a trainer or you're ready to make your expertise discoverable, you're in the right place. Tell us what you need and we'll help you take the next step."
        meta={["Replies within 1 working day", "Mon–Fri · 10am–6pm IST", "Bengaluru, India"]}
      />

      <section className="gutter py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <span className="label flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent" /> Get in touch
            </span>
            <Reveal as="h2" className="mt-4 max-w-sm text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
              A conversation is a good <em className="flourish">starting point.</em>
            </Reveal>

            <dl className="mt-9 border-t border-ink/15">
              <div className="border-b border-ink/15 py-5">
                <dt className="label text-[0.56rem] text-muted">Meet us</dt>
                <dd className="mt-2 max-w-xs font-display text-[1.2rem] leading-[1.35] tracking-[-0.02em]">
                  {site.address.line}, {site.address.area}, {site.address.city} {site.address.pin}
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="label text-[0.56rem] text-muted">Call us</dt>
                <dd className="mt-1">
                  <a href={site.phoneHref} className="ink-link font-display text-[1.3rem] tracking-[-0.02em]">{site.phone}</a>
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="label text-[0.56rem] text-muted">Email us</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="ink-link font-display text-[1.3rem] tracking-[-0.02em]">{site.email}</a>
                </dd>
              </div>
              <div className="border-b border-ink/15 py-5">
                <dt className="label text-[0.56rem] text-muted">Follow</dt>
                <dd className="mt-2 flex flex-col gap-2">
                  {site.socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-[0.88rem] text-ink-2 hover:text-accent">
                      {s.label} <span className="text-muted">— {s.handle}</span>
                      <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-ink/15 bg-paper-2">
              <div className="absolute inset-0 dot-grid text-ink opacity-40" aria-hidden="true" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-ink/15" aria-hidden="true" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-ink/15" aria-hidden="true" />
              <div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/50">
                <span className="size-2 rounded-full bg-accent" />
              </div>
              <span className="absolute left-4 top-4 label text-[0.55rem] text-muted">Koramangala · Bengaluru</span>
              <span className="absolute bottom-4 left-4 font-display text-[1.5rem] tracking-[-0.02em]">627, 17A Main</span>
              <span className="absolute bottom-4 right-4 label text-[0.55rem] text-muted">{site.coordinates}</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Suspense fallback={<div className="min-h-[26rem] border border-ink/15 bg-cream p-8 label text-muted">Loading the enquiry form…</div>}>
              <ContactForm />
            </Suspense>
            <div className="mt-4 grid gap-3 border-t border-ink/15 pt-4 text-[0.68rem] uppercase tracking-[0.1em] text-muted sm:grid-cols-3">
              <span>01 — We read every note</span>
              <span>02 — We reply within a day</span>
              <span>03 — No obligation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-forest py-16 text-cream">
        <div className="gutter grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="font-display text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.03em]">
              Not sure where to start? Begin with the <em className="italic text-gold">requirement</em> — not a name.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-2.5 rounded-full bg-cream px-5 py-3.5 text-[0.82rem] font-semibold text-forest transition-colors duration-500 hover:bg-gold">
              Email the team <ArrowUpRight className="size-3.5" />
            </a>
            <a href={site.phoneHref} className="rounded-full border border-cream/30 px-5 py-3.5 text-[0.82rem] font-semibold transition-colors duration-500 hover:border-gold hover:text-gold">
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
