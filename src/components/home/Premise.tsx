import { Counter } from "@/components/ui/Counter";
import { stats } from "@/lib/content";
import { Reveal } from "@/motion/Reveal";

export function Premise() {
  return (
    <section className="gutter relative py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <div className="sticky top-28 flex flex-col gap-4">
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">01</span>
              <span className="h-px w-8 bg-accent" />
              The premise
            </span>
            <p className="max-w-[15rem] text-[0.82rem] leading-relaxed text-muted">
              A professional network built around one idea: expertise should be easy to find, and easy to offer.
            </p>
          </div>
        </div>

        <div className="lg:col-span-9">
          <Reveal as="h2" className="display text-[clamp(2.2rem,4.4vw,4.25rem)] leading-[1.02] tracking-[-0.035em]">
            Finding a good trainer shouldn’t depend on <em className="flourish">who you know.</em>
          </Reveal>

          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2 lg:gap-14">
            <Reveal as="p" split="none" className="text-[1.02rem] leading-[1.7] text-ink-2">
              There are talented professionals across India with knowledge, skills and experience that can make a
              difference. There are also organisations, institutions and individuals constantly looking for the right
              expertise. Yet finding that connection can often be difficult.
            </Reveal>
            <Reveal as="p" split="none" delay={0.08} className="text-[1.02rem] leading-[1.7] text-ink-2">
              It may depend on a referral, a personal contact, a WhatsApp group, a social media post or simply knowing
              the right person. <strong className="font-semibold text-ink">Trainers Connect was created to make that connection easier.</strong>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="tabular text-[clamp(2.4rem,4.4vw,4rem)] leading-none tracking-[-0.05em]">
                  <Counter value={s.value} />
                </span>
                <span className="mt-1 text-[0.62rem] uppercase tracking-[0.13em] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start gap-6 border-y border-ink/15 py-8 lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-display text-[clamp(1.35rem,2.4vw,2.1rem)] leading-[1.15] tracking-[-0.025em]">
          <span className="text-muted">Our belief is simple:</span> the expertise exists. The opportunities exist.{" "}
          <em className="flourish">The connection shouldn&apos;t be difficult.</em>
        </p>
        <span className="label shrink-0 rounded-full border border-ink/25 px-4 py-2 text-[0.58rem] text-muted">Est. 2026 · Bengaluru</span>
      </div>
    </section>
  );
}
