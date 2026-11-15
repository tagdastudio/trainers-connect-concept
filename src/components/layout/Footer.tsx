import { AppLink as Link } from "@/components/ui/AppLink";
import { CTA, FOOTER_LINKS, site } from "@/lib/site";
import { ArrowUpRight } from "@/components/ui/Arrow";
import { Seal } from "@/components/ui/Seal";
import { FooterNewsletterNote, NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.18]" aria-hidden="true" />

      <div className="gutter relative grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-5">
          <span className="label text-cream/60">The invitation</span>
          <p className="mt-5 max-w-md font-display text-[clamp(1.8rem,3.3vw,3rem)] leading-[1.04] tracking-[-0.03em]">
            Find the right expertise. Or make your <em className="italic text-gold">expertise</em> discoverable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={CTA.find.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-cream px-5 py-3 text-[0.85rem] font-semibold text-forest transition-colors duration-500 hover:bg-gold"
            >
              Find a trainer
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={CTA.join.href}
              className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-5 py-3 text-[0.85rem] font-semibold transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              Join the network
            </Link>
          </div>

          <div className="mt-10 flex items-end gap-6">
            <Seal className="size-24 text-cream/60" />
            <div className="label flex flex-col gap-1.5 text-cream/60">
              <span>Est. {site.established}</span>
              <span>{site.address.city}, India</span>
              <span className="text-cream/70">{site.coordinates}</span>
            </div>
          </div>
          <a
            href="https://tagda.studio"
            target="_blank"
            rel="noreferrer"
            className="label mt-7 inline-flex w-fit items-center gap-1.5 border-t border-cream/15 pt-4 text-gold transition-colors duration-300 hover:text-cream"
          >
            Concept, design & build — Tagda Studio ↗
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
          <FooterColumn title="Explore" items={FOOTER_LINKS.explore} />
          <FooterColumn title="Participate" items={FOOTER_LINKS.participate} />
          <FooterColumn title="Small print" items={FOOTER_LINKS.legal} />
          <div className="flex flex-col gap-3">
            <span className="label text-cream/65">Reach us</span>
            <a href={`mailto:${site.email}`} className="ink-link w-fit text-[0.9rem]">
              {site.email}
            </a>
            <a href={site.phoneHref} className="ink-link w-fit text-[0.9rem]">
              {site.phone}
            </a>
            <address className="max-w-[13rem] text-[0.82rem] not-italic leading-relaxed text-cream/65">
              {site.address.line}, {site.address.area}, {site.address.city} {site.address.pin}
            </address>
            <div className="mt-1 flex flex-col gap-2">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="ink-link w-fit text-[0.82rem] text-cream/70">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="gutter relative grid gap-6 border-t border-cream/12 py-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <span className="label text-cream/65">The {site.name} journal</span>
          <div className="mt-3">
            <NewsletterForm />
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-sm text-[0.85rem] leading-relaxed text-cream/65">
            Insight for trainers, coaches, mentors and the organisations looking for them.
          </p>
          <div className="mt-2">
            <FooterNewsletterNote />
          </div>
        </div>
      </div>

      <div className="gutter relative select-none pb-6" aria-hidden="true">
        <div className="flex items-baseline justify-between gap-4 border-t border-cream/12 pt-6 font-display text-[clamp(2.6rem,10.6vw,10rem)] leading-[0.8] tracking-[-0.055em]">
          <span>Trainers</span>
          <span className="italic text-gold">Connect</span>
        </div>
      </div>

      <div className="gutter relative flex flex-col gap-2 border-t border-cream/12 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-[0.66rem] uppercase tracking-[0.12em] text-cream/65 sm:flex-row sm:items-center sm:justify-between">
        <span>© {site.established} {site.name}. All rights reserved.</span>
        <a href="https://tagda.studio" target="_blank" rel="noreferrer" className="ink-link w-fit text-gold/80 hover:text-gold">
          Mockup by Tagda Studio ↗
        </a>
        <Link href="/" className="ink-link w-fit text-cream/60">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: readonly { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="label text-cream/65">{title}</span>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="ink-link w-fit text-[0.88rem] text-cream/80 hover:text-cream">
          {item.label}
        </Link>
      ))}
    </div>
  );
}
