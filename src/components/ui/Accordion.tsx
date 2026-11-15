"use client";

import { useId, useState } from "react";
import { Plus } from "@/components/ui/Arrow";

type Item = { q: string; a: string };

export function Accordion({ items, defaultOpen = 0 }: { items: readonly Item[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const base = useId();

  return (
    <ul className="border-t border-ink/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-ink/15">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${base}-panel-${i}`}
              id={`${base}-button-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-300 hover:text-accent"
            >
              <span className="flex items-baseline gap-4">
                <span className={`label text-[0.55rem] transition-colors ${isOpen ? "text-accent" : "text-muted"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-display text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.25] tracking-[-0.02em] transition-colors ${isOpen ? "text-accent" : "text-ink"}`}>
                  {item.q}
                </span>
              </span>
              <span className={`mt-1 grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${isOpen ? "border-accent text-accent" : "border-ink/20 text-ink-2 group-hover:border-ink/50"}`}>
                <Plus open={isOpen} className="size-3.5" />
              </span>
            </button>
            <div
              id={`${base}-panel-${i}`}
              role="region"
              aria-labelledby={`${base}-button-${i}`}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-expo)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pl-9 pr-8 text-[0.9rem] leading-[1.75] text-ink-2">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
