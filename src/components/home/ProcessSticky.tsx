"use client";

import { AppLink as Link } from "@/components/ui/AppLink";
import { useRef, useState } from "react";
import { steps } from "@/lib/content";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/motion/Reveal";
import { gsap, ScrollTrigger, useGSAP } from "@/motion/gsap";

export function ProcessSticky() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-step]", root.current);
      const triggers = items.map((el, i) =>
        ScrollTrigger.create({
          trigger: el,
          start: "top 58%",
          end: "bottom 58%",
          onToggle: (self) => self.isActive && setActive(i),
        }),
      );
      return () => triggers.forEach((t) => t.kill());
    },
    { scope: root },
  );

  return (
    <section ref={root} className="gutter relative py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">03</span>
              <span className="h-px w-8 bg-accent" />
              How it works
            </span>
            <Reveal as="h2" className="mt-5 max-w-md text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.01] tracking-[-0.035em]">
              From requirement to the <em className="flourish">right expertise,</em> made simpler.
            </Reveal>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink-2">
              Finding expertise is simple when the search is built around your requirement, not a list of names.
            </p>

            <div className="mt-10 flex items-end gap-6">
              <span key={active} className="page-enter tabular font-display text-[clamp(5rem,9vw,8.5rem)] leading-[0.75] tracking-[-0.06em] text-accent">
                {steps[active].index}
              </span>
              <div className="flex flex-col gap-2 pb-2">
                <span className="label text-muted">Step {active + 1} of {steps.length}</span>
                <span className="max-w-[11rem] font-display text-[1.15rem] leading-tight">{steps[active].title}</span>
              </div>
            </div>

            <div className="mt-8 max-w-sm border-t border-ink/15 pt-4">
              <div className="h-px w-full bg-ink/15">
                <div
                  className="h-px bg-accent transition-[width] duration-700 ease-[var(--ease-expo)]"
                  style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                />
              </div>
              <p className="mt-4 text-[0.82rem] leading-relaxed text-muted">
                Start with your need. The network does the matching — by expertise, audience, language, location and format.
              </p>
            </div>

            <Link href="/how-it-works" className="group mt-6 inline-flex items-center gap-2 text-[0.83rem] font-semibold">
              See the full process
              <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="border-t border-ink/15">
            {steps.map((step, i) => (
              <li
                key={step.index}
                data-step
                className={`grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-7 transition-opacity duration-700 sm:grid-cols-[4.5rem_1fr] sm:gap-6 lg:py-9 ${
                  i === active ? "opacity-100" : "opacity-40"
                }`}
              >
                <span className={`label pt-1 text-[0.6rem] transition-colors duration-500 ${i === active ? "text-accent" : "text-muted"}`}>
                  {step.index}
                </span>
                <div>
                  <h3 className={`font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-none tracking-[-0.03em] transition-colors duration-500 ${
                    i === active ? "text-ink" : "text-ink-2"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-ink-2">{step.text}</p>
                  {i === active ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Expertise", "Audience", "Location", "Language", "Format"].map((tag) => (
                        <span key={tag} className="rounded-full border border-ink/20 px-3 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
