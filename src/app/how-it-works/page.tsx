import type { Metadata } from "next";
import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { disciplines, steps } from "@/lib/content";
import { Reveal } from "@/motion/Reveal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "One platform, many possibilities. Search, filter, discover and connect with trainers, coaches and mentors across India — by expertise, audience, location, language and format.",
  alternates: { canonical: "/how-it-works" },
};

const paths = [
  {
    index: "01",
    title: "For trainers",
    line: "Expertise · Profile · Visibility · Discoverability · Connections",
    text: "Build a professional profile that makes your experience, certifications, audience and methodology easy to understand.",
  },
  {
    index: "02",
    title: "For organisations",
    line: "Requirement · Search · Discovery · Choice · Connection",
    text: "Start with the learning need, then find professionals who match your audience, context and delivery requirements.",
  },
  {
    index: "03",
    title: "For individuals",
    line: "Need · Search · Right expertise · Growth",
    text: "Whether you are preparing for a career move or building a new capability, start with what you need to learn.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="How it works"
        title={
          <>
            One platform. Many <em className="flourish">possibilities.</em>
          </>
        }
        intro="Finding expertise is simple when the search is structured around the actual requirement — not a list of names. Here is how discovery works on Trainers Connect."
        meta={["Search", "Filter", "Discover", "Connect"]}
      />

      <section className="gutter py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">01</span>
              <span className="h-px w-8 bg-accent" />
              The catalogue
            </span>
            <Reveal as="h2" className="mt-4 max-w-sm text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
              What can you find on <em className="flourish">Trainers Connect?</em>
            </Reveal>
            <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-ink-2">
              A growing network of professionals across corporate learning, education, wellness, creative practice and
              specialised expertise.
            </p>
            <div className="relative mt-8 aspect-[4/5] max-w-[22rem] overflow-hidden bg-paper-3">
              <Image
                src="/images/133859.jpg"
                alt="A facilitator leading a discussion around a table"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
              <span className="absolute bottom-4 left-4 label text-cream/80">The room / Fig. 02</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid border-t border-ink/15 sm:grid-cols-2">
              {disciplines.map((d) => (
                <Link
                  key={d.name}
                  href="/trainers-directory"
                  className="group flex flex-col justify-between gap-4 border-b border-ink/15 py-6 transition-colors duration-500 hover:bg-paper-2/60 sm:px-5 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="label text-[0.58rem] text-accent">{d.index}</span>
                    <ArrowUpRight className="size-4 text-ink/25 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-[1.35rem] leading-tight tracking-[-0.025em]">{d.name}</h3>
                    <p className="mt-2 text-[0.74rem] leading-relaxed text-muted">{d.topics.join(" · ")}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-5 font-display text-[1.3rem] italic tracking-[-0.02em] text-ink-2">And the network keeps growing.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-paper-2/60 py-20 lg:py-28">
        <div className="gutter">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="label flex items-center gap-3 text-accent">
                <span className="text-[0.58rem] text-muted">02</span>
                <span className="h-px w-8 bg-accent" />
                The process
              </span>
              <Reveal as="h2" className="mt-4 max-w-xl text-[clamp(2.1rem,4.2vw,3.9rem)] leading-[1.01] tracking-[-0.035em]">
                From requirement to the right expertise — <em className="flourish">made simpler.</em>
              </Reveal>
            </div>
            <p className="max-w-sm text-[0.9rem] leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
              Trainers Connect helps you discover professionals based on expertise, specialisation, experience,
              audience, location, language and training format.
            </p>
          </div>

          <ol className="mt-12 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5 lg:border-t-0">
            {steps.map((step, i) => (
              <li
                key={step.index}
                className="group relative flex flex-col gap-5 border-b border-ink/15 py-7 lg:border-b-0 lg:border-t lg:border-ink/25 lg:py-8 lg:pr-6 [&:not(:last-child)]:lg:border-r"
              >
                <div className="flex items-center justify-between">
                  <span className="tabular font-display text-[clamp(2.5rem,4vw,3.6rem)] leading-none tracking-[-0.05em] text-accent">
                    {step.index}
                  </span>
                  {i < steps.length - 1 ? <Arrow className="hidden size-4 text-ink/20 lg:block" /> : null}
                </div>
                <div>
                  <h3 className="font-display text-[1.4rem] leading-none tracking-[-0.025em]">{step.title}</h3>
                  <p className="mt-3 text-[0.84rem] leading-relaxed text-ink-2">{step.text}</p>
                </div>
                <span className="mt-auto hidden h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[var(--ease-expo)] group-hover:scale-x-100 lg:block" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="gutter py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">03</span>
              <span className="h-px w-8 bg-accent" />
              Built for every need
            </span>
            <Reveal as="h2" className="mt-4 max-w-sm text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
              A better way for expertise to meet <em className="flourish">opportunity.</em>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            {paths.map((p) => (
              <div key={p.title} className="grid gap-4 border-t border-ink/15 py-7 sm:grid-cols-[3rem_1fr_1.2fr] sm:gap-6">
                <span className="label text-[0.58rem] text-accent">{p.index}</span>
                <div>
                  <h3 className="font-display text-[1.45rem] leading-none tracking-[-0.025em]">{p.title}</h3>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.12em] text-muted">{p.line}</p>
                </div>
                <p className="max-w-md text-[0.88rem] leading-relaxed text-ink-2">{p.text}</p>
              </div>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/trainers-directory" className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3.5 text-[0.84rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent">
                Find a trainer <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link href="/submit-listing" className="group inline-flex items-center gap-2.5 rounded-full border border-ink/25 px-5 py-3.5 text-[0.84rem] font-semibold transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream">
                Join as a trainer <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
