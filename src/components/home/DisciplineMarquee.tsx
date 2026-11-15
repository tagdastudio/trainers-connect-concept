import { disciplines } from "@/lib/content";

export function DisciplineMarquee() {
  const items = disciplines.map((d) => d.name.replace(" & ", " & "));
  const track = [...items, ...items];

  return (
    <section aria-label="Training disciplines" className="relative overflow-hidden border-y border-forest bg-forest py-4 text-cream">
      <div className="marquee flex items-center">
        <span className="label hidden shrink-0 border-r border-cream/15 px-6 text-[0.6rem] text-cream/65 lg:block">
          The disciplines
        </span>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track items-center gap-0">
            {track.map((item, i) => (
              <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-6 pr-6 text-[0.78rem] uppercase tracking-[0.12em] text-cream/75">
                <span className="font-display text-[1.05rem] normal-case tracking-[-0.01em] text-cream">{item}</span>
                <span className="text-gold">✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
