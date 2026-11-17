"use client";

import { useEffect, useRef } from "react";
import { gsap, MQ } from "@/motion/gsap";

/** Hairline scroll indicator across the very top of the page. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia(MQ.motion).matches) return;
    const tween = gsap.to(el, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: () => document.documentElement.scrollHeight - window.innerHeight, scrub: 0.4 } });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-[env(safe-area-inset-top)] z-[90] h-px">
      <div ref={ref} className="h-full origin-left scale-x-0 bg-accent" />
    </div>
  );
}
