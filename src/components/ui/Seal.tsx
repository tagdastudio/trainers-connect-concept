export function Seal({ className = "", text = "SEARCH · DISCOVER · CONNECT ·" }: { className?: string; text?: string }) {
  return (
    <span className={`relative grid aspect-square place-items-center rounded-full ${className}`} aria-hidden="true">      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path id="seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-current font-mono text-[8.2px] tracking-[0.24em] uppercase">
          <textPath href="#seal-path">{text} {text}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 120 120" className="size-[42%]" fill="none">
        <circle cx="49" cy="60" r="15" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="71" cy="60" r="15" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
      </svg>
    </span>
  );
}
