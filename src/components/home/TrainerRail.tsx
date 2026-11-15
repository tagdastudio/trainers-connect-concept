import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { trainers } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/Arrow";
import { Reveal } from "@/motion/Reveal";

export function TrainerRail() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="gutter flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="label flex items-center gap-3 text-accent">
            <span className="text-[0.58rem] text-muted">04</span>
            <span className="h-px w-8 bg-accent" />
            In the network
          </span>
          <Reveal as="h2" className="mt-4 max-w-xl text-[clamp(2.1rem,4.2vw,3.9rem)] leading-[1.01] tracking-[-0.035em]">
            A first look at the people behind the <em className="flourish">profiles.</em>
          </Reveal>
        </div>
        <Link href="/trainers-directory" className="group inline-flex shrink-0 items-center gap-2.5 text-[0.84rem] font-semibold">
          View all profiles
          <span className="grid size-8 place-items-center rounded-full border border-ink/25 transition-colors duration-500 group-hover:bg-ink group-hover:text-cream">
            <ArrowUpRight className="size-3.5" />
          </span>
        </Link>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-[max(1.25rem,4vw)] pb-4 pl-[max(1.25rem,4vw)] pr-[max(1.25rem,4vw)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {trainers.map((t, i) => (
          <Link
            key={t.slug}
            href={`/trainers-directory/${t.slug}`}
            className={`group relative w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[23.5vw] ${i === 0 ? "" : ""}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-3">
              <Image
                src={t.image}
                alt={`Portrait of ${t.name}`}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 78vw"
                className="object-cover grayscale-[0.25] transition-all duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-forest/25 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-2.5 py-1 text-[0.56rem] uppercase tracking-[0.12em] text-ink backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-4 top-4 grid size-8 place-items-center rounded-full border border-cream/40 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <ArrowUpRight className="size-3.5" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="label text-[0.55rem] text-cream/65">{t.category}</span>
                <p className="mt-1 font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-cream">{t.name}</p>
                <div className="mt-2 flex items-center gap-2 text-[0.68rem] text-cream/70">
                  <span>{t.city}</span>
                  <span className="size-1 rounded-full bg-cream/40" />
                  <span>{t.years}</span>
                </div>

                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-expo)] group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 border-t border-cream/25 pt-2 text-[0.72rem] leading-relaxed text-cream/80">
                      {t.languages.join(" · ")} · {t.formats.join(" / ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-start justify-between gap-3">
              <p className="max-w-[16rem] text-[0.78rem] leading-snug text-ink-2">{t.headline}</p>
              <span className="label shrink-0 pt-0.5 text-[0.55rem] text-muted">{t.state}</span>
            </div>
          </Link>
        ))}

        <Link
          href="/submit-listing"
          className="group flex w-[78vw] shrink-0 snap-start flex-col justify-between border border-ink/20 bg-paper-2 p-6 sm:w-[44vw] lg:w-[23.5vw]"
        >
          <span className="label text-accent">Your profile here</span>
          <div>
            <p className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.05] tracking-[-0.03em]">
              Make your expertise <em className="flourish">discoverable.</em>
            </p>
            <div className="mt-5 flex items-center gap-2 text-[0.8rem] font-semibold">
              Join as a trainer
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>
      </div>

      <div className="gutter mt-2 flex items-center justify-between gap-4 border-t border-ink/15 pt-3">
        <span className="label text-[0.56rem] text-muted">Scroll to explore · Profiles from the network</span>
        <span className="hidden text-[0.62rem] uppercase tracking-[0.12em] text-muted sm:inline">{String(trainers.length).padStart(2, "0")} profiles shown</span>
      </div>
    </section>
  );
}
