"use client";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);
  CustomEase.create("expo", "0.19,1,0.22,1");
  CustomEase.create("soft", "0.33,1,0.68,1");
  CustomEase.create("page", "0.44,0.14,0.28,1");
  gsap.defaults({ ease: "expo", duration: 1 });
}

export const MQ = {
  desktop: "(min-width: 1024px)",
  motion: "(prefers-reduced-motion: no-preference)",
  fine: "(hover: hover) and (pointer: fine)",
} as const;

export { gsap, ScrollTrigger, SplitText, useGSAP };
