import type { Metadata } from "next";
import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { notFound } from "next/navigation";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { trainers } from "@/lib/content";
import { Reveal } from "@/motion/Reveal";

export function generateStaticParams() {
  return trainers.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) return {};
  return {
    title: trainer.name,
    description: trainer.headline,
    alternates: { canonical: `/trainers-directory/${trainer.slug}` },
  };
}

export default async function TrainerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = trainers.find((t) => t.slug === slug);
  if (!trainer) notFound();

  const others = trainers.filter((t) => t.slug !== trainer.slug).slice(0, 3);

  return (
    <>
      <div className="gutter border-b border-ink/15 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-muted">
          <Link href="/" className="ink-link">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/trainers-directory" className="ink-link">Find trainers</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink-2">{trainer.name}</span>
        </nav>
      </div>

      <section className="gutter py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="label flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent" />
              {trainer.category}
            </span>
            <Reveal as="h1" className="mt-4 font-display text-[clamp(2.8rem,5.6vw,5.6rem)] leading-[0.92] tracking-[-0.045em]">
              {trainer.name}
            </Reveal>
            <p className="mt-5 max-w-xl text-[clamp(1.05rem,1.4vw,1.3rem)] leading-relaxed text-ink-2">{trainer.headline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/contact-us?subject=${encodeURIComponent(`Enquiry: ${trainer.name}`)}`}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[0.85rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent"
              >
                Send an enquiry
                <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link href="/trainers-directory" className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-3.5 text-[0.85rem] font-semibold transition-colors duration-500 hover:border-ink">
                Back to directory
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2">
              {trainer.bio.map((p) => (
                <p key={p} className="text-[0.94rem] leading-[1.75] text-ink-2">{p}</p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-accent pl-5">
              <p className="font-display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.25] tracking-[-0.025em]">
                “{trainer.quote}”
              </p>
            </blockquote>

            <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2">
              <div>
                <span className="label text-accent">Areas of expertise</span>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {trainer.topics.map((t) => (
                    <li key={t} className="rounded-full border border-ink/20 px-3 py-1 text-[0.7rem] text-ink-2">{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="label text-accent">Credentials</span>
                <ul className="mt-3 flex flex-col gap-2 text-[0.85rem] leading-relaxed text-ink-2">
                  {trainer.credentials.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-3">
                <Image
                  src={trainer.image}
                  alt={`Portrait of ${trainer.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 label rounded-full bg-cream/85 px-3 py-1 text-[0.56rem] text-ink backdrop-blur">
                  Profile / {trainer.added}
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-2 border-t border-ink/15">
                {[
                  ["Based in", `${trainer.city}, ${trainer.state}`],
                  ["Experience", trainer.years],
                  ["Languages", trainer.languages.join(", ")],
                  ["Delivery", trainer.formats.join(" · ")],
                ].map(([k, v], i) => (
                  <div key={k} className={`border-b border-ink/15 py-4 ${i % 2 === 0 ? "pr-4" : "pl-4 border-l"}`}>
                    <dt className="label text-[0.55rem] text-muted">{k}</dt>
                    <dd className="mt-1.5 text-[0.82rem] leading-snug text-ink-2">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5">
                <span className="label text-[0.55rem] text-muted">Works with</span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {trainer.audiences.map((a) => (
                    <span key={a} className="rounded-full bg-paper-2 px-2.5 py-1 text-[0.66rem] text-ink-2">{a}</span>
                  ))}
                </div>
              </div>

              <p className="mt-6 border-t border-ink/15 pt-4 text-[0.7rem] leading-relaxed text-muted">
                Profile information is submitted by the professional. Organisations should review credentials and
                clarify requirements directly before finalising an engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-paper-2/50 py-16">
        <div className="gutter">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.03em]">More from the network</h2>
            <Link href="/trainers-directory" className="group inline-flex items-center gap-2 text-[0.8rem] font-semibold">
              View all <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {others.map((t) => (
              <Link key={t.slug} href={`/trainers-directory/${t.slug}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-paper-3">
                  <Image src={t.image} alt={`Portrait of ${t.name}`} fill sizes="(min-width: 640px) 30vw, 100vw" className="object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-[1.04] group-hover:grayscale-0" />
                </div>
                <span className="mt-3 block label text-[0.55rem] text-accent">{t.category}</span>
                <span className="mt-1 block font-display text-[1.25rem] tracking-[-0.02em] group-hover:text-accent">{t.name}</span>
                <span className="mt-0.5 block text-[0.7rem] text-muted">{t.city} · {t.languages.join(" · ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
