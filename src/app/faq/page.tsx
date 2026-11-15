import type { Metadata } from "next";
import { AppLink as Link } from "@/components/ui/AppLink";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { Arrow } from "@/components/ui/Arrow";
import { faqGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers for trainers, coaches, mentors, organisations and individuals using Trainers Connect — membership, profiles, search, fees and engagement.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="FAQ"
        title={
          <>
            Questions, answered <em className="flourish">plainly.</em>
          </>
        }
        intro="Everything you need to know about joining the network, being discovered and finding the right professional. If your question isn't here, write to us."
        meta={["20 questions", "For trainers", "For organisations"]}
      />

      {faqGroups.map((group, gi) => (
        <section
          key={group.label}
          id={gi === 0 ? "for-trainers" : "for-organisations"}
          className={`gutter scroll-mt-24 py-16 lg:py-20 ${gi === 1 ? "border-t border-ink/15 bg-paper-2/50" : ""}`}
        >
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="label flex items-center gap-3 text-accent">
                  <span className="text-[0.58rem] text-muted">{String(gi + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-accent" />
                  {group.label}
                </span>
                <h2 className="mt-4 max-w-xs font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.02] tracking-[-0.035em]">
                  {gi === 0 ? (
                    <>Joining the <em className="flourish">network.</em></>
                  ) : (
                    <>Finding the right <em className="flourish">fit.</em></>
                  )}
                </h2>
                <p className="mt-4 max-w-xs text-[0.84rem] leading-relaxed text-muted">
                  {gi === 0
                    ? "Membership, discoverability and what a professional profile can do for your practice."
                    : "Search, shortlisting and how engagements work on the platform."}
                </p>
                <Link href={gi === 0 ? "/submit-listing" : "/trainers-directory"} className="group mt-6 inline-flex items-center gap-2 text-[0.8rem] font-semibold">
                  {gi === 0 ? "Join as a trainer" : "Find a trainer"}
                  <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Accordion items={group.items} />
            </div>
          </div>
        </section>
      ))}

      <section className="gutter border-t border-ink/15 py-14">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.15] tracking-[-0.025em]">
            Still have a question? <span className="text-muted">We answer within one working day.</span>
          </p>
          <Link href="/contact-us" className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink px-5 py-3.5 text-[0.84rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent">
            Contact us <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
