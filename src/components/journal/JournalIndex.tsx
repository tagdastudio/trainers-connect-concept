"use client";

import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { useState } from "react";
import { posts } from "@/lib/content";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";

const categories = ["All", "For trainers", "For organisations", "Industry"] as const;

export function JournalIndex() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const visible = category === "All" ? posts : posts.filter((p) => p.category === category);
  const [lead, ...rest] = visible;

  return (
    <section className="gutter py-12 lg:py-16">
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-500 ${
                category === c ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink-2 hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <span className="label text-[0.56rem] text-muted">
          {visible.length} {visible.length === 1 ? "piece" : "pieces"} · Issue 01
        </span>
      </div>

      {lead ? (
        <Link href={`/blogs/${lead.slug}`} className="group mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="relative aspect-[16/10] overflow-hidden bg-paper-3 lg:col-span-7">
            <Image
              src={lead.image}
              alt={lead.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-[1.5s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
            />
            <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.56rem] uppercase tracking-[0.12em] text-ink backdrop-blur">
              Featured
            </span>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <div className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.12em] text-muted">
              <span className="text-accent">{lead.category}</span>
              <span className="size-1 rounded-full bg-ink/25" />
              <span>{lead.date}</span>
              <span className="size-1 rounded-full bg-ink/25" />
              <span>{lead.readTime}</span>
            </div>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(1.9rem,3.8vw,3.4rem)] leading-[1.02] tracking-[-0.035em]">
              {lead.title}
            </h2>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink-2">{lead.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-[0.82rem] font-semibold">
              Read the piece
              <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ) : null}

      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="group">
            <div className="relative aspect-[16/11] overflow-hidden bg-paper-3">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                className="object-cover transition-transform duration-[1.3s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
              />
              <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-cream/85 text-ink opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                <ArrowUpRight className="size-3.5" />
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2.5 text-[0.58rem] uppercase tracking-[0.12em] text-muted">
              <span className="text-accent">{post.category}</span>
              <span className="size-1 rounded-full bg-ink/25" />
              <span>{post.date}</span>
            </div>
            <h3 className="mt-2 font-display text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.12] tracking-[-0.025em] transition-colors duration-500 group-hover:text-accent">
              {post.title}
            </h3>
            <p className="mt-2.5 line-clamp-3 text-[0.85rem] leading-relaxed text-ink-2">{post.excerpt}</p>
            <span className="mt-3 flex items-center justify-between border-t border-ink/10 pt-2 text-[0.62rem] uppercase tracking-[0.1em] text-muted">
              <span>{post.readTime}</span>
              <span aria-hidden="true">{String(i + 2).padStart(2, "0")} ↗</span>
            </span>
          </Link>
        ))}
      </div>

      {!visible.length ? (
        <p className="py-16 text-center font-display text-[1.6rem] text-muted">No pieces in this category yet.</p>
      ) : null}
    </section>
  );
}
