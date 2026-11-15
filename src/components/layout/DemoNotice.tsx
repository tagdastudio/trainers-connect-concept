import { ArrowUpRight } from "@/components/ui/Arrow";

export function DemoNotice() {
  return (
    <div className="relative z-[68] bg-gold text-forest">
      <div className="gutter flex flex-wrap items-center justify-between gap-x-5 gap-y-1 py-2 text-[0.56rem] uppercase tracking-[0.12em]">
        <span className="flex items-center gap-2">
          <span className="rounded-full bg-forest px-2 py-0.5 text-[0.5rem] tracking-[0.14em] text-cream">Mock website</span>
          <span className="hidden sm:inline">A concept rebuild — not the live Trainers Connect site.</span>
          <span className="sm:hidden">Concept rebuild, not the live site.</span>
        </span>
        <a
          href="https://tagda.studio"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 font-semibold"
        >
          A concept by Tagda Studio
          <ArrowUpRight className="size-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

export function Watermark() {
  return (
    <a
      href="https://tagda.studio"
      target="_blank"
      rel="noreferrer"
      className="group fixed right-1 top-1/2 z-[76] hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-cream/20 bg-forest/92 px-1.5 py-3 text-cream shadow-[0_12px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-md transition-colors duration-500 hover:border-gold/60 hover:bg-forest sm:flex"
    >
      <span className="[writing-mode:vertical-rl] rotate-180 text-[0.46rem] uppercase tracking-[0.18em] text-cream/65">
        Mockup · tagda.studio
      </span>
      <ArrowUpRight className="size-3 rotate-45 text-cream/60 transition-colors duration-500 group-hover:text-gold" />
    </a>
  );
}
