"use client";

import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { useRef } from "react";
import { CTA, site } from "@/lib/site";
import { disciplines, stats } from "@/lib/content";
import { gsap, MQ, useGSAP } from "@/motion/gsap";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { Seal } from "@/components/ui/Seal";
import { Counter } from "@/components/ui/Counter";
import { Select } from "@/components/ui/Select";

const CITIES = ["Bengaluru", "Chennai", "Mumbai", "Delhi", "Hyderabad", "Kolkata", "Pune", "Anywhere in India"];
const AUDIENCES = ["Corporate teams", "School students", "College students", "Managers & leaders", "Teachers & educators", "Individuals"];

export function HomeHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const intro = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.08 });
        intro
          .from(q("[data-line]"), { yPercent: 112, duration: 1.25, stagger: 0.09 }, 0)
          .from(q("[data-fade]"), { autoAlpha: 0, y: 18, duration: 1, stagger: 0.08 }, 0.25)
          .from(q("[data-plate]"), { clipPath: "inset(100% 0 0 0)", duration: 1.4, ease: "expo.inOut" }, 0.15)
          .from(q("[data-card]"), { autoAlpha: 0, y: 26, rotate: 4, duration: 1.1 }, 0.65);

        gsap.to(q("[data-parallax]"), {
          yPercent: 9,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(q("[data-drift]"), {
          yPercent: 24,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });

      const plate = root.current?.querySelector<HTMLElement>("[data-tilt]");
      const onMove = (e: PointerEvent) => {
        if (!plate || !window.matchMedia(MQ.fine).matches) return;
        const r = plate.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(plate, { rotateY: x * 5, rotateX: -y * 5, duration: 1.1, ease: "power2.out", transformPerspective: 900 });
      };
      const reset = () => plate && gsap.to(plate, { rotateY: 0, rotateX: 0, duration: 1.4, ease: "expo.out" });
      plate?.addEventListener("pointermove", onMove);
      plate?.addEventListener("pointerleave", reset);
      return () => {
        plate?.removeEventListener("pointermove", onMove);
        plate?.removeEventListener("pointerleave", reset);
        mm.revert();
      };
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative pb-10 pt-8 sm:pt-12 lg:pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(199,154,59,0.2),transparent_65%)] blur-2xl"
      />

      <div className="gutter relative flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-3 text-[0.62rem] uppercase tracking-[0.14em] text-muted">
        <span data-fade className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent animate-blink" />
          India&apos;s first trainer network
        </span>
        <span data-fade className="hidden md:inline">Est. {site.established} · {site.address.city}, India</span>
        <span data-fade>Search · Discover · Connect</span>
      </div>

      <div className="gutter relative grid gap-10 pb-10 pt-8 lg:grid-cols-12 lg:gap-6 lg:pb-14 lg:pt-12">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pr-8">
          <p data-fade className="label mb-5 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent" /> A national register of expertise
          </p>
          <h1 className="display-tight text-[clamp(3.2rem,7.6vw,7.2rem)]">
            <span className="block overflow-hidden pb-[0.07em]">
              <span data-line className="block">India’s trainers.</span>
            </span>
            <span className="block overflow-hidden pb-[0.07em]">
              <span data-line className="block">One powerful</span>
            </span>
            <span className="block overflow-hidden pb-[0.09em]">
              <span data-line className="block">
                <em className="flourish pr-1">network.</em>
              </span>
            </span>
          </h1>

          <p data-fade className="mt-7 max-w-xl text-[clamp(1.02rem,1.1vw,1.22rem)] leading-relaxed text-ink-2">
            Trainers Connect connects trainers, coaches, mentors and experts with the people and organisations looking
            for their expertise — across disciplines, languages and cities.
          </p>

          <div data-fade className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={CTA.find.href}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-[0.88rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent"
            >
              Find a trainer
              <span className="grid size-6 place-items-center rounded-full bg-cream/12">
                <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              href={CTA.join.href}
              className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-4 text-[0.88rem] font-semibold transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream"
            >
              Join as a trainer
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <dl data-fade className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-ink/15 pt-5">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-muted">{s.label}</dt>
                <dd className="tabular text-[clamp(1.7rem,2.6vw,2.6rem)] leading-none tracking-[-0.04em]">
                  <Counter value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div data-drift className="relative ml-auto w-full max-w-[30rem]">
            <div data-plate className="arch relative h-[24rem] overflow-hidden bg-paper-3 sm:h-[30rem] lg:h-[34rem]">
              <div data-tilt className="absolute inset-0" data-parallax>
                <Image
                  src="/images/141262.jpg"
                  alt="A facilitator leading a leadership workshop in India"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 30rem, 100vw"
                  className="scale-[1.06] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-cream">
                <span className="label leading-relaxed">The room where<br />expertise meets need</span>
                <span className="label text-cream/65">Fig. 01</span>
              </div>
            </div>

            <div data-card className="tape paper-card absolute -left-4 bottom-16 z-10 w-[13.5rem] p-4 sm:-left-10 sm:w-[15rem]">
              <span className="label text-accent">Network note / 001</span>
              <p className="mt-2 font-display text-[1.25rem] leading-[1.15] tracking-[-0.02em]">
                Diverse expertise.
                <br />
                <em className="italic text-accent">One connected space.</em>
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-ink/15 pt-2 text-[0.6rem] uppercase tracking-[0.12em] text-muted">
                <span>500+ topics</span>
                <span>30+ domains</span>
              </div>
            </div>

            <span className="absolute -right-2 -top-6 z-10 block size-20 sm:size-24 lg:-right-6">
              <Seal className="size-full bg-paper/60 text-ink/60 backdrop-blur-sm" />
            </span>
          </div>

          <div data-fade className="relative mt-6 ml-auto flex max-w-[30rem] items-center justify-between gap-4 border-t border-ink/15 pt-3 text-[0.62rem] uppercase tracking-[0.12em] text-muted">
            <span>Corporate · Education · Wellness · Arts</span>
            <Link href="/how-it-works" className="ink-link text-ink">
              How it works
            </Link>
          </div>
        </div>
      </div>

      <div className="gutter relative">
        <form
          action="/trainers-directory"
          className="grid gap-0 rounded-[1.25rem] border border-ink/15 bg-cream/70 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_auto]"
        >
          <HeroField label="I need a trainer for">
            <Select
              name="q"
              placeholder="Any expertise"
              options={disciplines.map((d) => ({ value: d.name, label: d.name }))}
              buttonClassName="text-[0.95rem] font-medium"
              ariaLabel="Expertise"
            />
          </HeroField>
          <HeroField label="For">
            <Select
              name="audience"
              placeholder="Any audience"
              options={AUDIENCES.map((a) => ({ value: a, label: a }))}
              buttonClassName="text-[0.95rem] font-medium"
              ariaLabel="Audience"
            />
          </HeroField>
          <HeroField label="In">
            <Select
              name="city"
              placeholder="Anywhere in India"
              options={CITIES.map((c) => ({ value: c, label: c }))}
              buttonClassName="text-[0.95rem] font-medium"
              ariaLabel="City"
            />
          </HeroField>
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 rounded-b-[1.25rem] bg-ink px-7 py-5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-cream transition-colors duration-500 hover:bg-accent sm:rounded-b-none sm:rounded-br-[1.25rem]"
          >
            Search the network
            <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}

function HeroField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col gap-1 border-b border-ink/15 px-5 py-3.5 transition-colors duration-300 focus-within:bg-paper-2/60 sm:border-r lg:border-b-0">
      <span className="text-[0.58rem] uppercase tracking-[0.14em] text-muted">{label}</span>
      {children}
    </div>
  );
}
