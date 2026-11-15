"use client";

import { AppLink as Link } from "@/components/ui/AppLink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { CTA, NAV, site } from "@/lib/site";
import { ArrowUpRight } from "@/components/ui/Arrow";
import { Wordmark } from "@/components/ui/Wordmark";

export function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  return (
    <>
      <header
        className={`sticky top-0 z-[70] transition-[background-color,box-shadow,color] duration-500 ${
          open
            ? "max-lg:invisible bg-transparent text-cream shadow-none"
            : scrolled
              ? "bg-paper/92 text-ink shadow-[0_1px_0_rgba(22,36,28,0.12)] backdrop-blur-md"
              : "bg-paper/60 text-ink backdrop-blur-sm"
        }`}
      >
        <div className="gutter grid h-[4.5rem] grid-cols-[1fr_auto] items-center gap-6 lg:h-[5rem] lg:grid-cols-12">
          <Link href="/" className="flex items-center text-[1.18rem] leading-none lg:col-span-3">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden justify-center lg:col-span-6 lg:flex">
            <ul className="flex items-center gap-6 xl:gap-7">
              {NAV.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`ink-link text-[0.83rem] font-medium tracking-[0.01em] transition-colors duration-300 hover:text-accent ${
                        active ? "text-accent" : "text-ink-2"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center justify-end gap-5 lg:col-span-3 lg:flex">
            <Link href={CTA.signIn.href} className="ink-link text-[0.83rem] font-medium text-ink-2 hover:text-accent">
              Sign in
            </Link>
            <Link
              href={CTA.join.href}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[0.8rem] font-semibold text-cream transition-colors duration-500 hover:bg-forest"
            >
              Join as a trainer
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="group flex items-center gap-3 lg:hidden"
          >
            <span className="label text-[0.6rem] text-muted">{open ? "Close" : "Menu"}</span>
            <span className="relative grid size-9 place-items-center rounded-full border border-ink/25">
              <span className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[3px]"}`} />
              <span className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[3px]"}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[80] flex flex-col bg-forest text-cream transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="gutter flex h-[4.5rem] shrink-0 items-center justify-between border-b border-cream/12 pt-[env(safe-area-inset-top)]">
          <Link href="/" onClick={() => setOpen(false)} className="font-display text-[1.2rem] tracking-[-0.04em]">
            Trainers <em className="italic text-gold">Connect</em>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="group flex items-center gap-2 rounded-full border border-cream/30 py-1.5 pl-3 pr-1.5 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <span className="text-[0.56rem] uppercase tracking-[0.14em] text-cream/70 group-hover:text-gold">Close</span>
            <span className="grid size-8 place-items-center rounded-full bg-cream/10">
              <svg viewBox="0 0 16 16" fill="none" className="size-3.5" aria-hidden="true">
                <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>

        <div className="gutter flex flex-1 flex-col overflow-y-auto pt-6">
          <nav aria-label="Mobile primary">
            <ul>
              {NAV.map((item, i) => (
                <li key={item.href} className="border-b border-cream/12">
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-4 py-3.5"
                    onClick={() => setOpen(false)}
                  >
                    <span className="label w-6 text-[0.58rem] text-cream/60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[clamp(1.7rem,8vw,2.6rem)] leading-none tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:text-gold">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto grid gap-6 pb-10 pt-8 sm:grid-cols-2">
            <Link href={CTA.join.href} onClick={() => setOpen(false)} className="inline-flex items-center justify-between gap-3 rounded-full bg-gold px-5 py-4 text-[0.9rem] font-semibold text-forest">
              Join as a trainer <ArrowUpRight className="size-4" />
            </Link>
            <div className="label flex flex-col gap-2 text-cream/65">
              <a href={`mailto:${site.email}`} className="text-cream">{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
              <span>{site.address.city}, India</span>
              <a href="https://tagda.studio" target="_blank" rel="noreferrer" className="mt-2 text-gold">
                Mockup by Tagda Studio ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
