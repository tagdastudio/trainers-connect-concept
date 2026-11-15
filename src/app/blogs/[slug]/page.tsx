import type { Metadata } from "next";
import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { notFound } from "next/navigation";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { ArticleBody, slugify } from "@/components/journal/ArticleBody";
import { posts } from "@/lib/content";
import { SITE_URL, site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.shortTitle,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const headings = post.body.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <div className="gutter border-b border-ink/15 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-muted">
          <Link href="/" className="ink-link">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blogs" className="ink-link">Journal</Link>
          <span aria-hidden="true">/</span>
          <span className="max-w-[14rem] truncate text-ink-2">{post.shortTitle}</span>
        </nav>
      </div>

      <header className="gutter pb-10 pt-10 lg:pb-14 lg:pt-14">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 text-[0.62rem] uppercase tracking-[0.12em] text-muted">
            <span className="rounded-full border border-accent/30 px-3 py-1 text-accent">{post.category}</span>
            <span>{post.date}</span>
            <span className="size-1 rounded-full bg-ink/25" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.3rem,5vw,4.8rem)] leading-[0.98] tracking-[-0.045em]">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-[clamp(1.02rem,1.3vw,1.22rem)] leading-relaxed text-ink-2">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-4">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-forest text-[0.66rem] font-semibold text-cream">TC</span>
              <div className="flex flex-col">
                <span className="text-[0.8rem] font-semibold">{site.name} Editorial</span>
                <span className="text-[0.62rem] uppercase tracking-[0.1em] text-muted">Connecting expertise with opportunity</span>
              </div>
            </div>
            <span className="label text-[0.55rem] text-muted">Issue 01 · {post.dateISO.slice(0, 4)}</span>
          </div>
        </div>
      </header>

      <div className="gutter">
        <figure className="relative aspect-[16/9] w-full overflow-hidden bg-paper-3 lg:aspect-[21/9]">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" className="object-cover" />
        </figure>
        <figcaption className="mt-2 flex justify-between gap-4 border-t border-ink/15 pt-2 text-[0.6rem] uppercase tracking-[0.1em] text-muted">
          <span>Fig. — {post.category}</span>
          <span>{site.name} Journal</span>
        </figcaption>
      </div>

      <div className="gutter py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <span className="label text-accent">In this piece</span>
              <ol className="mt-4 flex flex-col gap-2.5 border-t border-ink/15 pt-4">
                {headings.map((h, i) => (
                  <li key={h.text}>
                    <a href={`#${slugify(h.text)}`} className="group flex gap-3 text-[0.76rem] leading-snug text-ink-2 transition-colors hover:text-accent">
                      <span className="text-[0.58rem] tabular text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span>{h.text.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-ink/15 pt-4">
                <Link href="/blogs" className="group inline-flex items-center gap-2 text-[0.74rem] font-semibold">
                  <span className="rotate-180"><Arrow className="size-3.5" /></span>
                  All journal pieces
                </Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <ArticleBody blocks={post.body} />

            <div className="mt-14 border-t border-ink/15 pt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md font-display text-[1.25rem] leading-[1.25] tracking-[-0.02em]">
                  Written by the {site.name} editorial desk. Connecting expertise with opportunity.
                </p>
                <Link
                  href="/trainers-directory"
                  className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-ink/25 px-5 py-3 text-[0.8rem] font-semibold transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream"
                >
                  Explore the network <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      <section className="border-t border-ink/15 bg-paper-2/50 py-16">
        <div className="gutter">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] tracking-[-0.03em]">Keep reading</h2>
            <Link href="/blogs" className="group inline-flex items-center gap-2 text-[0.78rem] font-semibold">
              All pieces <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {more.map((p) => (
              <Link key={p.slug} href={`/blogs/${p.slug}`} className="group grid grid-cols-[7rem_1fr] gap-4 sm:grid-cols-[10rem_1fr] sm:gap-5">
                <div className="relative aspect-square overflow-hidden bg-paper-3">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="160px" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div>
                  <span className="label text-[0.54rem] text-accent">{p.category}</span>
                  <h3 className="mt-1.5 font-display text-[1.15rem] leading-[1.15] tracking-[-0.02em] group-hover:text-accent sm:text-[1.3rem]">{p.shortTitle}</h3>
                  <span className="mt-2 block text-[0.65rem] text-muted">{p.date} · {p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.dateISO,
            image: `${SITE_URL}${post.image}`,
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name, url: SITE_URL },
            mainEntityOfPage: `${SITE_URL}/blogs/${post.slug}`,
          }),
        }}
      />
    </>
  );
}
