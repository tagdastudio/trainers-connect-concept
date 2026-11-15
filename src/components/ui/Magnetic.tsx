"use client";

import { useRef } from "react";
import { gsap, MQ } from "@/motion/gsap";

/** A small magnet: the child drifts toward the pointer, then settles home. */
export function Magnetic({ children, strength = 0.22 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <span
      ref={ref}
      className="inline-flex will-change-transform"
      onPointerMove={(e) => {
        if (!window.matchMedia(MQ.fine).matches) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - (r.left + r.width / 2)) * strength,
          y: (e.clientY - (r.top + r.height / 2)) * strength,
          duration: 0.7,
          ease: "expo.out",
        });
      }}
      onPointerLeave={() => {
        if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 1.1, ease: "elastic.out(1,0.35)" });
      }}
    >
      {children}
    </span>
  );
}
