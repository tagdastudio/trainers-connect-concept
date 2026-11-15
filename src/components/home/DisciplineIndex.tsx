"use client";

import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { useState } from "react";
import { disciplines } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/Arrow";
import { Reveal } from "@/motion/Reveal";

export function DisciplineIndex() {
  const [active, setActive] = useState(0);
  const current = disciplines[active];

  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden="true" />
      <div className="gutter relative grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="label flex items-center gap-3 text-gold">
              <span className="text-[0.58rem] text-cream/40">02</span>
              <span className="h-px w-8 bg-gold" />
              The register
            </span>
            <Reveal as="h2" className="mt-5 max-w-md font-display text-[clamp(2.1rem,3.6vw,3.5rem)] leading-[1.02] tracking-[-0.035em]">
              Eight discipline groups. <em className="italic text-gold">One search</em> away.
            </Reveal>

            <div className="relative mt-8 hidden aspect-[4/5] w-full max-w-[24rem] overflow-hidden bg-forest-2 lg:block">
              {disciplines.map((d, i) => (
                <Image
                  key={d.name}
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className={`object-cover transition-all duration-[1.1s] ease-[var(--ease-expo)] ${
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <span className="label text-cream/50">{current.index} / 08</span>
                  <p className="mt-1 max-w-[14rem] font-display text-[1.2rem] leading-tight text-cream">{current.blurb}</p>
                </div>
                <span className="label text-gold">↗</span>
              </div>
            </div>

            <div className="mt-6 flex max-w-[24rem] items-center justify-between gap-4 border-t border-cream/15 pt-3">
              <span className="label text-cream/40">500+ training topics</span>
              <Link href="/trainers-directory" className="group inline-flex items-center gap-2 text-[0.78rem] font-semibold text-cream">
                Explore the directory
                <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-cream/15">
            {disciplines.map((d, i) => (
              <li key={d.name} className="border-b border-cream/15">
                <Link
                  href="/trainers-directory"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-4 transition-[padding,background-color] duration-500 ease-[var(--ease-expo)] hover:bg-cream/[0.04] sm:grid-cols-[2.5rem_1fr_auto_auto] sm:gap-5 sm:py-5 ${
                    i === active ? "sm:pl-3" : ""
                  }`}
                >
                  <span className={`label text-[0.58rem] transition-colors duration-500 ${i === active ? "text-gold" : "text-cream/35"}`}>
                    {d.index}
                  </span>

                  <span className="min-w-0">
                    <span className={`block font-display text-[clamp(1.3rem,2.1vw,1.85rem)] leading-tight tracking-[-0.025em] transition-colors duration-500 ${
                      i === active ? "text-gold" : "text-cream"
                    }`}>
                      {d.name}
                    </span>
                    <span className="mt-1 block truncate text-[0.72rem] text-cream/45">{d.topics.join(" · ")}</span>
                  </span>

                  <span className="relative hidden size-12 shrink-0 overflow-hidden sm:block">
                    <Image src={d.image} alt="" fill sizes="48px" className={`object-cover transition-transform duration-700 ${i === active ? "scale-110" : "scale-100 opacity-60"}`} />
                  </span>

                  <span className={`grid size-8 place-items-center rounded-full border transition-all duration-500 ${
                    i === active ? "border-gold bg-gold text-forest" : "border-cream/25 text-cream/60"
                  }`}>
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.72rem] leading-relaxed text-cream/35">
            Plus specialised and emerging skills — the network keeps growing.
          </p>
        </div>
      </div>
    </section>
  );
}
