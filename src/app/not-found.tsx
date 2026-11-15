import { AppLink as Link } from "@/components/ui/AppLink";
import { Arrow } from "@/components/ui/Arrow";
import { Seal } from "@/components/ui/Seal";

export default function NotFound() {
  return (
    <section className="gutter flex min-h-[70svh] flex-col justify-center py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <span className="label text-accent">Error 404 · Page not found</span>
          <h1 className="mt-5 font-display text-[clamp(4rem,12vw,11rem)] leading-[0.82] tracking-[-0.06em]">
            A missing <em className="flourish">connection.</em>
          </h1>
          <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ink-2">
            This page isn&apos;t in the register. The expertise you need may still be — start with the network, or head
            back to the beginning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/trainers-directory" className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[0.85rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent">
              Find a trainer <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link href="/" className="rounded-full border border-ink/25 px-6 py-3.5 text-[0.85rem] font-semibold transition-colors duration-500 hover:border-ink">
              Back home
            </Link>
          </div>
        </div>
        <div className="hidden justify-end lg:col-span-4 lg:flex">
          <Seal className="size-52 text-ink/30" text="PAGE NOT FOUND · TRY THE NETWORK ·" />
        </div>
      </div>
    </section>
  );
}
