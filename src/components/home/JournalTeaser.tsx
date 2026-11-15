import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { posts } from "@/lib/content";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { Reveal } from "@/motion/Reveal";

export function JournalTeaser() {
  const featured = posts.filter((p) => p.featured);
  const [lead, ...rest] = featured;

  return (
    <section className="border-y border-ink/15 bg-paper-2/60 py-20 lg:py-28">
      <div className="gutter">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">05</span>
              <span className="h-px w-8 bg-accent" />
              The journal
            </span>
            <Reveal as="h2" className="mt-4 max-w-xl text-[clamp(2.1rem,4.2vw,3.9rem)] leading-[1.01] tracking-[-0.035em]">
              Insight from trainers, coaches and <em className="flourish">industry professionals.</em>
            </Reveal>
          </div>
          <Link href="/blogs" className="group inline-flex shrink-0 items-center gap-2.5 text-[0.84rem] font-semibold">
            All insights
            <span className="grid size-8 place-items-center rounded-full border border-ink/25 transition-colors duration-500 group-hover:bg-ink group-hover:text-cream">
              <Arrow className="size-3.5" />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Link href={`/blogs/${lead.slug}`} className="group lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-paper-3">
              <Image
                src={lead.image}
                alt={lead.imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.56rem] uppercase tracking-[0.12em] text-ink backdrop-blur">
                {lead.category}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.12em] text-muted">
              <span>{lead.date}</span>
              <span className="size-1 rounded-full bg-ink/25" />
              <span>{lead.readTime}</span>
            </div>
            <h3 className="mt-3 max-w-2xl font-display text-[clamp(1.55rem,2.7vw,2.4rem)] leading-[1.08] tracking-[-0.025em]">
              {lead.title}
            </h3>
            <p className="mt-3 max-w-xl text-[0.9rem] leading-relaxed text-ink-2">{lead.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[0.8rem] font-semibold">
              Read the piece
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>

          <div className="flex flex-col lg:col-span-5">
            {rest.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group grid grid-cols-[5.5rem_1fr] gap-4 border-t border-ink/15 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr] sm:gap-5"
              >
                <div className="relative aspect-square overflow-hidden bg-paper-3">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
                  />
                </div>
                <div>
                  <span className="label text-[0.55rem] text-accent">{post.category}</span>
                  <h3 className="mt-1.5 font-display text-[1.12rem] leading-[1.18] tracking-[-0.02em] sm:text-[1.25rem]">{post.shortTitle}</h3>
                  <span className="mt-2 block text-[0.68rem] text-muted">{post.date} · {post.readTime}</span>
                </div>
              </Link>
            ))}

            <div className="mt-auto border-t border-ink/15 pt-5">
              <p className="max-w-sm font-display text-[1.15rem] leading-[1.25] tracking-[-0.02em] text-ink-2">
                Practical reading for people who build other people&apos;s capability.
              </p>
              <Link href="/blogs" className="group mt-3 inline-flex items-center gap-2 text-[0.8rem] font-semibold">
                Browse the journal
                <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
