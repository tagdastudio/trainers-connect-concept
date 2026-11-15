import { AppLink as Link } from "@/components/ui/AppLink";
import { Arrow } from "./Arrow";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "cream" | "text";
  className?: string;
  arrow?: boolean;
};

const styles = {
  solid: "bg-ink text-cream hover:bg-accent",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  cream: "bg-cream text-forest hover:bg-gold hover:text-forest",
  text: "px-0 text-ink hover:text-accent",
};

export function LinkButton({ href, children, variant = "solid", className = "", arrow = true }: Props) {
  const base =
    variant === "text"
      ? "group inline-flex items-center gap-2 text-[0.95rem] font-semibold"
      : "group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.92rem] font-semibold tracking-[-0.01em] transition-colors duration-500";
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span>{children}</span>
      {arrow ? (
        <span
          className="grid size-6 place-items-center rounded-full transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-0.5"
        >
          <Arrow className="size-3.5" />
        </span>
      ) : null}
    </Link>
  );
}
