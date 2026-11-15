import { AppLink as Link } from "@/components/ui/AppLink";
import { Reveal } from "@/motion/Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  meta?: string[];
  children?: React.ReactNode;
  tone?: "paper" | "forest";
};

export function PageHeader({ index, eyebrow, title, intro, meta, children, tone = "paper" }: Props) {
  const forest = tone === "forest";
  return (
    <section className={`relative overflow-hidden border-b ${forest ? "border-cream/15 bg-forest text-cream" : "border-ink/15"}`}>
      {forest ? <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden="true" /> : null}
      <div className="gutter relative pb-12 pt-10 lg:pb-16 lg:pt-14">
        <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.12em] ${forest ? "text-cream/40" : "text-muted"}`}>
          <Link href="/" className="ink-link">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className={forest ? "text-cream/70" : "text-ink-2"}>{eyebrow}</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <span className={`label flex items-center gap-3 ${forest ? "text-gold" : "text-accent"}`}>
              <span className={forest ? "text-cream/35" : "text-muted"}>{index}</span>
              <span className={`h-px w-8 ${forest ? "bg-gold" : "bg-accent"}`} />
              {eyebrow}
            </span>
            <Reveal as="h1" className="mt-5 max-w-[16ch] font-display text-[clamp(2.7rem,6.2vw,6.2rem)] leading-[0.94] tracking-[-0.045em]">
              {title}
            </Reveal>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:pb-1">
            {intro ? (
              <Reveal as="p" split="none" className={`max-w-md text-[0.98rem] leading-relaxed ${forest ? "text-cream/65" : "text-ink-2"}`}>
                {intro}
              </Reveal>
            ) : null}
            {meta?.length ? (
              <div className={`flex flex-wrap gap-x-5 gap-y-2 border-t pt-4 text-[0.62rem] uppercase tracking-[0.12em] ${forest ? "border-cream/15 text-cream/45" : "border-ink/15 text-muted"}`}>
                {meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
