import { AppLink as Link } from "@/components/ui/AppLink";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { Seal } from "@/components/ui/Seal";
import { Reveal } from "@/motion/Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/2 size-[36rem] -translate-y-1/2 rounded-full border border-cream/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-10 top-1/2 size-[24rem] -translate-y-1/2 rounded-full border border-cream/10" aria-hidden="true" />
      <div className="gutter relative grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <span className="label flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold" />
            The invitation
          </span>
          <Reveal as="h2" className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6.4vw,6.4rem)] leading-[0.94] tracking-[-0.045em]">
            The right expertise is <em className="italic text-gold">closer</em> than you think.
          </Reveal>
          <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-cream/60">
            Whether you&apos;re looking for a trainer or you&apos;re ready to make your expertise discoverable,
            you&apos;re in the right place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/trainers-directory"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-6 py-4 text-[0.86rem] font-semibold text-forest transition-colors duration-500 hover:bg-gold"
            >
              Find a trainer
              <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/submit-listing"
              className="group inline-flex items-center gap-3 rounded-full border border-cream/30 px-6 py-4 text-[0.86rem] font-semibold transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              Join as a trainer
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6 lg:col-span-4 lg:justify-end">
          <div className="label flex flex-col gap-1.5 text-cream/60">
            <span className="text-gold">Free to search</span>
            <span>No commission on fees</span>
            <span>Pan-India network</span>
          </div>
          <Seal className="size-28 shrink-0 text-cream/65 sm:size-36" text="CONNECTING EXPERTISE WITH OPPORTUNITY ·" />
        </div>
      </div>
    </section>
  );
}
