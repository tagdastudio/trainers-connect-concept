import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { audiences, trainerSteps } from "@/lib/content";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { Reveal } from "@/motion/Reveal";

export function SplitPaths() {
  return (
    <section className="relative grid border-y border-ink/15 lg:grid-cols-2">
      <div className="group relative isolate overflow-hidden bg-forest px-6 py-16 text-cream sm:px-10 lg:px-12 lg:py-24">
        <Image
          src="/images/141262.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 -z-10 scale-105 object-cover opacity-20 transition-all duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-100 group-hover:opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/70 via-forest/80 to-forest" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-2 top-6 font-display text-[8rem] leading-none text-cream/5 lg:text-[12rem]">
          01
        </span>

        <div className="flex h-full min-h-[30rem] flex-col">
          <span className="label flex items-center gap-3 text-gold">
            <span className="h-px w-7 bg-gold" /> For trainers
          </span>
          <Reveal as="h2" className="mt-5 max-w-md font-display text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
            Your knowledge has value. <em className="italic text-gold">Make it easier to find.</em>
          </Reveal>
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-cream/65">
            Whether you are an experienced corporate trainer, leadership coach, fitness professional, yoga instructor,
            dance trainer, sports coach or a specialist with a unique skill — there is a place for your expertise.
          </p>

          <ol className="mt-8 grid gap-0 border-t border-cream/15">
            {trainerSteps.map((step, i) => (
              <li key={step} className="flex items-center gap-4 border-b border-cream/15 py-3">
                <span className="label w-6 text-[0.56rem] text-cream/35">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[0.92rem] text-cream/85">{step}</span>
              </li>
            ))}
          </ol>

          <Link
            href="/submit-listing"
            className="group/link mt-auto inline-flex w-fit items-center gap-3 pt-9 text-[0.86rem] font-semibold text-gold"
          >
            Join the network
            <span className="grid size-8 place-items-center rounded-full border border-gold/50 transition-colors duration-500 group-hover/link:bg-gold group-hover/link:text-forest">
              <Arrow className="size-3.5 transition-transform duration-500 group-hover/link:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>

      <div className="group relative isolate overflow-hidden bg-paper-2 px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <Image
          src="/images/20266.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="absolute inset-0 -z-10 scale-105 object-cover opacity-15 mix-blend-multiply transition-all duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-100 group-hover:opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-paper-2/60 via-paper-2/80 to-paper-2" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-2 top-6 font-display text-[8rem] leading-none text-ink/5 lg:text-[12rem]">
          02
        </span>

        <div className="flex h-full min-h-[30rem] flex-col">
          <span className="label flex items-center gap-3 text-accent">
            <span className="h-px w-7 bg-accent" /> For organisations
          </span>
          <Reveal as="h2" className="mt-5 max-w-md text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
            You don’t need another contact list. You need <em className="flourish">the right person.</em>
          </Reveal>
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-ink-2">
            Start with your need and discover professionals who match it. Search by expertise, audience, location,
            language, experience and delivery format.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {audiences.map((a, i) => (
              <span
                key={a}
                className={`rounded-full border px-3.5 py-1.5 text-[0.72rem] transition-colors duration-500 ${
                  i % 3 === 1 ? "border-ink/25 text-ink-2 group-hover:border-accent/40" : "border-ink/15 text-muted"
                }`}
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-6 pt-9">
            <Link
              href="/trainers-directory"
              className="group/link inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3.5 text-[0.84rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent"
            >
              Search. Discover. Connect.
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
            <span className="label text-[0.56rem] text-muted">Free to search</span>
          </div>
        </div>
      </div>
    </section>
  );
}
