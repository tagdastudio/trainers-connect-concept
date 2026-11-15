import type { Metadata } from "next";
import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";
import { Arrow, ArrowUpRight } from "@/components/ui/Arrow";
import { Seal } from "@/components/ui/Seal";
import { principles, trainerSteps } from "@/lib/content";
import { Reveal } from "@/motion/Reveal";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Trainers Connect is building India's trusted network of trainers, coaches, mentors and experts — connecting expertise with organisations and individuals across industries, locations and learning needs.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tone="forest"
        index="01"
        eyebrow="About us"
        title={
          <>
            A network built for expertise to be <em className="italic text-gold">found.</em>
          </>
        }
        intro="Find the right expertise. Or make your expertise discoverable. From corporate trainers and leadership coaches to fitness professionals, yoga instructors, nutrition experts, dance trainers, sports coaches, mentors and specialised professionals — Trainers Connect brings diverse expertise together on one powerful platform."
        meta={["Est. 2026", "Bengaluru, India", "Pan-India network"]}
      />

      <section className="gutter py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-3">
                <Image
                  src="/images/20266.jpg"
                  alt="Professionals collaborating in a bright learning space"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="tape paper-card absolute -bottom-6 -right-3 w-[12rem] p-4 sm:right-6">
                <span className="label text-accent">Our belief</span>
                <p className="mt-1.5 font-display text-[1.05rem] leading-[1.2] tracking-[-0.02em]">
                  The expertise exists. The opportunities exist.
                </p>
              </div>
            </div>
            <div className="mt-14 flex items-center gap-5">
              <Seal className="size-24 text-ink/45" />
              <p className="max-w-[14rem] text-[0.78rem] leading-relaxed text-muted">
                A professional network, not a marketplace. The relationship stays between you and the client.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <span className="label flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent" /> Search. Discover. Connect. Grow.
            </span>
            <Reveal as="h2" className="mt-5 max-w-xl text-[clamp(2.1rem,4vw,3.7rem)] leading-[1.02] tracking-[-0.035em]">
              The connection shouldn&apos;t be <em className="flourish">difficult.</em>
            </Reveal>

            <div className="mt-8 grid gap-6 text-[0.98rem] leading-[1.75] text-ink-2 sm:grid-cols-2">
              <Reveal as="p" split="none">
                There are talented professionals across India with knowledge, skills and experience that can make a
                difference. There are also organisations, institutions and individuals constantly looking for the right
                expertise. Yet finding that connection can often be difficult.
              </Reveal>
              <Reveal as="p" split="none" delay={0.06}>
                It may depend on a referral, a personal contact, a WhatsApp group, a social media post or simply knowing
                the right person. Trainers Connect was created to make that connection easier.
              </Reveal>
            </div>

            <blockquote className="mt-10 border-l-2 border-accent pl-5">
              <p className="font-display text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.025em]">
                We are building a professional network where trainers, coaches, mentors and specialised experts can
                showcase their expertise, while organisations and individuals can discover professionals based on their
                specific needs.
              </p>
            </blockquote>

            <div className="mt-10 grid gap-0 border-t border-ink/15 sm:grid-cols-2">
              <div className="border-b border-ink/15 py-6 sm:border-b-0 sm:border-r sm:pr-8">
                <span className="label text-accent">Our mission</span>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                  To make professional expertise easier to discover and meaningful opportunities easier to access.
                </p>
              </div>
              <div className="py-6 sm:pl-8">
                <span className="label text-accent">Our vision</span>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                  To build India&apos;s trusted network of trainers, coaches, mentors and experts — connecting expertise
                  with organisations and individuals across industries, locations and learning needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-paper-2/60 py-20 lg:py-28">
        <div className="gutter">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label flex items-center gap-3 text-accent">
                <span className="text-[0.58rem] text-muted">02</span>
                <span className="h-px w-8 bg-accent" />
                The people
              </span>
              <Reveal as="h2" className="mt-4 max-w-lg text-[clamp(2.1rem,4vw,3.7rem)] leading-[1.02] tracking-[-0.035em]">
                The people behind <em className="flourish">Trainers Connect.</em>
              </Reveal>
            </div>
            <p className="max-w-sm text-[0.86rem] leading-relaxed text-muted">
              Every meaningful initiative begins with an idea and grows through the people who believe in it and work to
              bring it to life.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-8">
            <Founder
              name="Ramesh Batavia"
              role="Founder & Strategic Lead"
              image="/images/Team_ramesh.gif"
              bio="An accomplished trainer, professional mentor, author and entrepreneur, Ramesh Batavia brings decades of experience in training, business development and mentoring. He has designed and delivered thousands of training programmes, reaching professionals and business leaders across diverse industries."
              extra="His work in leadership, communication, team building and business growth reflects his passion for helping individuals and organisations realise their potential. Trainers Connect is an extension of his belief that knowledge and expertise should have greater reach."
              index="01"
            />
            <Founder
              name="Deepthi Mabel"
              role="Business Lead — Operations & Partnerships"
              image="/images/Team_deepthi.gif"
              bio="A lawyer and corporate trainer, Deepthi Mabel brings together her experience in law, training, communication and professional development. As a corporate trainer, she works across areas including POSH awareness, POCSO awareness and child safety advocacy."
              extra="She leads business execution, operations and partnerships at Trainers Connect, and is the primary point of contact for the network. For Deepthi, this initiative is about building a space where every trainer's knowledge has an opportunity to be discovered."
              index="02"
            />
          </div>
        </div>
      </section>

      <section className="gutter py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="label flex items-center gap-3 text-accent">
              <span className="text-[0.58rem] text-muted">03</span>
              <span className="h-px w-8 bg-accent" />
              Why this network
            </span>
            <Reveal as="h2" className="mt-4 max-w-sm text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
              More than a list of <em className="flourish">names.</em>
            </Reveal>
            <p className="mt-4 max-w-sm text-[0.9rem] leading-relaxed text-ink-2">
              Connecting people with professionals requires more than a directory. Trainers Connect is being built
              around three principles:
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              {principles.map((p) => (
                <div key={p.title} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-ink/15 py-7 sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline sm:gap-8">
                  <span className="label text-[0.62rem] text-accent">{p.index}</span>
                  <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-none tracking-[-0.03em]">{p.title}</h3>
                  <p className="col-start-2 max-w-md text-[0.9rem] leading-relaxed text-ink-2 sm:col-start-auto">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-ink/15 bg-paper-2/50 p-6 sm:p-8">
              <span className="label text-accent">Our role is simple</span>
              <p className="mt-3 max-w-2xl font-display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.2] tracking-[-0.025em]">
                We help you discover professionals who may be right for your specific requirement. The final decision,
                engagement and terms remain between the professional and the person or organisation seeking their
                expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-forest py-20 text-cream lg:py-24">
        <div className="gutter grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="label flex items-center gap-3 text-gold">
              <span className="text-[0.58rem] text-cream/60">04</span>
              <span className="h-px w-8 bg-gold" />
              For trainers
            </span>
            <Reveal as="h2" className="mt-4 max-w-md font-display text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.02] tracking-[-0.035em]">
              Your knowledge has value. <em className="italic text-gold">Make it easier to find.</em>
            </Reveal>
            <Link href="/submit-listing" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-cream px-5 py-3.5 text-[0.84rem] font-semibold text-forest transition-colors duration-500 hover:bg-gold">
              Create your profile
              <Arrow className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="grid gap-0 border-t border-cream/15">
              {trainerSteps.map((s, i) => (
                <li key={s} className="group flex items-center justify-between gap-4 border-b border-cream/15 py-4">
                  <span className="flex items-center gap-4">
                    <span className="label w-6 text-[0.56rem] text-cream/60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[1.2rem] tracking-[-0.02em] sm:text-[1.4rem]">{s}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-cream/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[0.8rem] leading-relaxed text-cream/60">
              Membership is annual. No commission is charged on your professional training fees.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Founder({ name, role, image, bio, extra, index }: { name: string; role: string; image: string; bio: string; extra: string; index: string }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-3">
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          fill
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="object-cover object-top transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 label rounded-full bg-cream/85 px-2.5 py-1 text-[0.56rem] text-ink backdrop-blur">{index}</span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 to-transparent p-5 pt-16">
          <h3 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-none tracking-[-0.03em] text-cream">{name}</h3>
          <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-cream/65">{role}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <p className="text-[0.88rem] leading-relaxed text-ink-2">{bio}</p>
        <p className="text-[0.88rem] leading-relaxed text-muted">{extra}</p>
      </div>
    </article>
  );
}
