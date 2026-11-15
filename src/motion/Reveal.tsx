"use client";

import { useRef, type ElementType } from "react";
import { gsap, MQ, useGSAP } from "./gsap";
import { splitOnce } from "./splitOnce";

type RevealProps<T extends ElementType> = {
  as?: T;
  split?: "lines" | "words" | "chars" | "none";
  delay?: number;
  stagger?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  split = "lines",
  delay = 0,
  stagger,
  className,
  children,
  ...attrs
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        if (split === "none") {
          return gsap.from(el, {
            autoAlpha: 0,
            y: 26,
            duration: 1.1,
            delay,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        }
        return splitOnce(
          el,
          {
            type: split === "lines" ? "lines" : `lines,${split}`,
            mask: "lines",
            linesClass: "split-line",
            aria: /^h[1-6]$/.test(String(Tag)) ? "auto" : "none",
          },
          (self) =>
            gsap.from(split === "lines" ? self.lines : split === "words" ? self.words : self.chars, {
              yPercent: 135,
              duration: split === "chars" ? 1 : 1.15,
              stagger: stagger ?? (split === "chars" ? 0.022 : 0.075),
              delay,
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            }),
        );
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} {...attrs}>
      {children}
    </Tag>
  );
}
