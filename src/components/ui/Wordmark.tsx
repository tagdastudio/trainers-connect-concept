import { site } from "@/lib/site";

/** The network mark: two offset rings joined by a bridge — expertise meeting opportunity. */
export function NetworkMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <circle cx="11" cy="16" r="7.25" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="21" cy="16" r="7.25" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "", mark = true }: { className?: string; mark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark ? <NetworkMark className="size-[1.5em] shrink-0" /> : null}
      <span className="inline-flex items-baseline gap-[0.18em] font-display tracking-[-0.04em]">
        <span>Trainers</span>
        <span className="italic text-accent">Connect</span>
        <sup className="label ml-0.5 hidden align-super text-[0.34em] tracking-[0.1em] text-ink/50 sm:inline">IN</sup>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
