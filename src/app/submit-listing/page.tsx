import type { Metadata } from "next";
import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { JoinForm } from "@/components/join/JoinForm";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { trainerSteps } from "@/lib/content";
import { Reveal } from "@/motion/Reveal";

export const metadata: Metadata = {
  title: "Join as a trainer",
  description:
    "Your expertise deserves to be discovered. Create a professional profile on Trainers Connect and become discoverable to organisations and individuals looking for your expertise.",
  alternates: { canonical: "/submit-listing" },
};

const included = [
  "Professional introduction",
  "Areas of expertise",
  "Training topics",
  "Qualifications & certifications",
  "Industries & audiences served",
  "Training methodology",
  "Languages",
  "Location & travel",
  "Online / offline availability",
  "Contact and enquiry route",
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        tone="forest"
        index="07"
        eyebrow="Join as a trainer"
        title={
          <>
            Your expertise deserves to be <em className="italic text-gold">discovered.</em>
          </>
        }
        intro="You may already have years of experience, qualifications, certifications and a powerful training methodology. Expertise has greater impact when the right people can find you."
        meta={["Annual membership", "No commission on fees", "Pan-India network"]}
      >
        <Link href="#create-profile" className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-cream px-5 py-3 text-[0.8rem] font-semibold text-forest transition-colors duration-500 hover:bg-gold">
          Start your profile <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </PageHeader>

      <section className="gutter py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">01</span>
              <span className="h-px w-8 bg-accent" />
              Are you a trainer, coach or mentor?
            </span>
            <Reveal as="h2" className="mt-4 max-w-md text-[clamp(2rem,3.6vw,3.3rem)] leading-[1.02] tracking-[-0.035em]">
              Make your expertise <em className="flourish">easy to discover.</em>
            </Reveal>
            <div className="mt-6 flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-ink-2">
              <p>
                Trainers Connect gives you a professional platform to showcase who you are, what you do, who you work
                with and where your expertise can create value.
              </p>
              <p>
                Instead of relying only on referrals, WhatsApp groups or social media, you can present your experience,
                certifications, training areas and location in one professional profile.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-display text-[1.4rem] leading-[1.25] tracking-[-0.025em]">
                Think of your profile as your professional training portfolio — not just a biography.
              </p>
            </blockquote>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about-us" className="group inline-flex items-center gap-2 text-[0.82rem] font-semibold">
                Why we built this <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link href="/faq#for-trainers" className="group inline-flex items-center gap-2 text-[0.82rem] font-semibold text-muted hover:text-ink">
                Trainer FAQs <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] overflow-hidden border border-ink/15 bg-paper-2">
              <Image
                src="/images/how-it-works.png"
                alt="A composite of trainers presenting and working with participants"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-ink/15 pt-2 text-[0.6rem] uppercase tracking-[0.1em] text-muted">
              <span>Fig. 03 — A professional practice, made visible</span>
              <span>Trainers Connect</span>
            </div>
          </div>
        </div>
      </section>

      <section id="create-profile" className="scroll-mt-24 border-y border-ink/15 bg-paper-2/60 py-16 lg:py-24">
        <div className="gutter grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="label flex items-center gap-3 text-accent">
                <span className="text-[0.58rem] text-muted">02</span>
                <span className="h-px w-8 bg-accent" />
                Create your profile
              </span>
              <h2 className="mt-4 max-w-sm font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.02] tracking-[-0.035em]">
                A profile built for <em className="flourish">clarity.</em>
              </h2>
              <p className="mt-4 max-w-sm text-[0.88rem] leading-relaxed text-ink-2">
                Structured information helps the right organisation understand your relevance quickly. Here is what a
                complete profile can include:
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.8rem] leading-snug text-ink-2">
                    <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true">
                      <path d="m3 8.5 3 3 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink/15 pt-4 text-[0.7rem] leading-relaxed text-muted">
                Annual membership. No commission is charged on your professional training fees.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <JoinForm />
            <p className="mt-3 text-[0.65rem] leading-relaxed text-muted">
              This is a concept form for the design preview. On the live platform, profile details would be reviewed
              before publication.
            </p>
          </div>
        </div>
      </section>

      <section className="gutter py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">03</span>
              <span className="h-px w-8 bg-accent" />
              What happens next
            </span>
            <Reveal as="h2" className="mt-4 max-w-sm text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
              From profile to <em className="flourish">discovery.</em>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ol className="grid border-t border-ink/15 sm:grid-cols-2">
              {trainerSteps.map((s, i) => (
                <li key={s} className="flex flex-col gap-4 border-b border-ink/15 py-6 sm:px-4 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0">
                  <span className="label text-[0.58rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-display text-[1.3rem] leading-tight tracking-[-0.02em]">{s}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[0.78rem] leading-relaxed text-muted">
              Membership gives you a platform to showcase your expertise. It does not guarantee a specific number of
              enquiries or assignments — opportunities depend on your expertise, profile quality, location, client
              requirements and availability.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
