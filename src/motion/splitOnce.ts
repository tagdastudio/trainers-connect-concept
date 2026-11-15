import { SplitText } from "./gsap";

/** Split once the fonts are ready, and never replay an entrance that has already played on resize. */
export function splitOnce(
  target: gsap.DOMTarget,
  vars: SplitText.Vars,
  animate: (self: SplitText, played: () => void) => gsap.core.Animation,
) {
  let instance: SplitText | undefined;
  let played = false;
  let cancelled = false;
  document.fonts.ready.then(() => {
    if (cancelled) return;
    instance = SplitText.create(target, {
      ...vars,
      autoSplit: true,
      onSplit: (self) => (played ? undefined : animate(self, () => (played = true))),
    });
  });
  return () => {
    cancelled = true;
    instance?.revert();
  };
}
