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
      aria-label="Mockup by Tagda Studio — open tagda.studio"
      className="group fixed bottom-4 left-4 z-[76] hidden items-center gap-2.5 rounded-full border border-cream/20 bg-forest/92 py-1.5 pl-1.5 pr-3 text-cream shadow-[0_12px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-md transition-colors duration-500 hover:border-gold/60 hover:bg-forest sm:inline-flex"
    >
      <span className="grid size-7 place-items-center rounded-full bg-gold text-[0.62rem] font-bold tracking-[-0.04em] text-forest">TS</span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.42rem] uppercase tracking-[0.18em] text-cream/55">Mockup by</span>
        <span className="mt-0.5 text-[0.68rem] font-semibold tracking-[-0.01em]">tagda.studio</span>
      </span>
      <ArrowUpRight className="size-3 text-cream/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
    </a>
  );
}
