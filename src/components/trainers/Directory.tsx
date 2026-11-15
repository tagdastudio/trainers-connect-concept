"use client";

import Image from "next/image";
import { AppLink as Link } from "@/components/ui/AppLink";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { trainers } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/Arrow";
import { Select } from "@/components/ui/Select";
import { Reveal } from "@/motion/Reveal";

const categories = Array.from(new Set(trainers.map((t) => t.category)));
const cities = Array.from(new Set(trainers.map((t) => t.city))).sort();
const audienceOptions = Array.from(new Set(trainers.flatMap((t) => t.audiences))).sort();
const formats = ["Online", "In-person", "Hybrid"];
const languages = Array.from(new Set(trainers.flatMap((t) => t.languages))).sort();

export function Directory() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "");
  const [city, setCity] = useState(params.get("city") ?? "");
  const [audience, setAudience] = useState(params.get("audience") ?? "");
  const [format, setFormat] = useState("");
  const [language, setLanguage] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return trainers.filter((t) => {
      if (category && t.category !== category) return false;
      if (city && t.city !== city) return false;
      if (audience && !t.audiences.includes(audience)) return false;
      if (format && !t.formats.some((f) => f.includes(format))) return false;
      if (language && !t.languages.includes(language)) return false;
      if (!q) return true;
      const haystack = [t.name, t.category, t.headline, t.city, t.state, ...t.topics, ...t.languages, ...t.audiences].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category, city, audience, format, language]);

  const activeCount = [query, category, city, audience, format, language].filter(Boolean).length;

  const clear = () => {
    setQuery("");
    setCategory("");
    setCity("");
    setAudience("");
    setFormat("");
    setLanguage("");
  };

  return (
    <section className="gutter py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
        <aside className={`${filtersOpen ? "block" : "hidden"} lg:block lg:sticky lg:top-28 lg:self-start`}>
          <div className="flex items-center justify-between border-b border-ink/15 pb-3">
            <span className="label text-accent">Refine the search</span>
            {activeCount > 0 ? (
              <button type="button" onClick={clear} className="text-[0.65rem] uppercase tracking-[0.1em] text-muted underline underline-offset-4 hover:text-accent">
                Clear ({activeCount})
              </button>
            ) : null}
          </div>

          <div className="mt-5">
            <label htmlFor="directory-q" className="label text-[0.56rem] text-muted">
              Keyword
            </label>
            <div className="mt-2 flex items-center gap-2 border-b border-ink/25 pb-2 focus-within:border-accent">
              <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0 text-muted" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                id="directory-q"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Leadership, Chennai…"
                className="w-full bg-transparent py-1 text-[0.88rem] placeholder:text-muted/70 focus:outline-none"
              />
            </div>
          </div>

          <FilterGroup title="Category">
            <div className="flex flex-col gap-2">
              {categories.map((c) => (
                <label key={c} className="flex cursor-pointer items-baseline gap-2 text-[0.78rem] leading-snug text-ink-2">
                  <input
                    type="radio"
                    name="category"
                    checked={category === c}
                    onChange={() => setCategory(category === c ? "" : c)}
                    className="mt-0.5 size-3 shrink-0 appearance-none rounded-full border border-ink/35 checked:border-[4px] checked:border-accent"
                  />
                  <span className="flex-1">{c}</span>
                  <span className="text-[0.6rem] text-muted">{trainers.filter((t) => t.category === c).length}</span>
                </label>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="City">
            <Select
              value={city}
              onChange={setCity}
              placeholder="Any city"
              options={cities}
              buttonClassName="border-b border-ink/25 py-2 text-[0.82rem]"
              ariaLabel="Filter by city"
            />
          </FilterGroup>

          <FilterGroup title="Audience">
            <Select
              value={audience}
              onChange={setAudience}
              placeholder="Any audience"
              options={audienceOptions}
              buttonClassName="border-b border-ink/25 py-2 text-[0.82rem]"
              ariaLabel="Filter by audience"
            />
          </FilterGroup>

          <FilterGroup title="Delivery">
            <div className="flex flex-wrap gap-1.5">
              {formats.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFormat(format === f ? "" : f)}
                  className={`rounded-full border px-2.5 py-1 text-[0.68rem] transition-colors duration-300 ${
                    format === f ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink-2 hover:border-ink/50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Language">
            <div className="flex flex-wrap gap-1.5">
              {languages.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLanguage(language === l ? "" : l)}
                  className={`rounded-full border px-2.5 py-1 text-[0.68rem] transition-colors duration-300 ${
                    language === l ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink-2 hover:border-ink/50"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </FilterGroup>

          <p className="mt-8 border-t border-ink/15 pt-4 text-[0.7rem] leading-relaxed text-muted">
            Can&apos;t find the right fit?{" "}
            <Link href="/contact-us" className="text-accent underline underline-offset-2">
              Tell us what you need
            </Link>{" "}
            and we&apos;ll help you search.
          </p>
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-3">
            <span className="label text-muted">
              Showing <span className="text-ink">{filtered.length}</span> of {trainers.length} profiles
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setFiltersOpen((v) => !v)}
                aria-expanded={filtersOpen}
                className="rounded-full border border-ink/25 px-3.5 py-1.5 text-[0.62rem] uppercase tracking-[0.1em] text-ink-2 transition-colors hover:border-ink lg:hidden"
              >
                {filtersOpen ? "Hide filters" : `Filters${activeCount ? ` (${activeCount})` : ""}`}
              </button>
              <span className="label hidden text-[0.56rem] text-muted sm:inline">Sorted by newest</span>
            </div>
          </div>

          {filtered.length ? (
            <ul>
              {filtered.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/trainers-directory/${t.slug}`}
                    className="group grid grid-cols-[6rem_1fr] gap-4 border-b border-ink/15 py-6 transition-colors duration-500 hover:bg-paper-2/50 sm:grid-cols-[9rem_1fr_11rem] sm:gap-7 sm:py-7"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-paper-3">
                      <Image
                        src={t.image}
                        alt={`Portrait of ${t.name}`}
                        fill
                        sizes="144px"
                        className="object-cover grayscale-[0.2] transition-all duration-[1.1s] group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>

                    <div className="min-w-0">
                      <span className="label text-[0.55rem] text-accent">{t.category}</span>
                      <h3 className="mt-1.5 font-display text-[clamp(1.35rem,2.4vw,1.9rem)] leading-none tracking-[-0.03em] transition-colors duration-500 group-hover:text-accent">
                        {t.name}
                      </h3>
                      <p className="mt-2 max-w-lg text-[0.86rem] leading-relaxed text-ink-2">{t.headline}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {t.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="rounded-full border border-ink/15 px-2.5 py-0.5 text-[0.62rem] text-muted">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2 flex items-end justify-between gap-4 border-t border-ink/10 pt-3 sm:col-span-1 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
                      <div className="flex flex-col gap-1 text-[0.68rem] text-muted sm:items-end">
                        <span className="text-ink-2">{t.city}, {t.state}</span>
                        <span>{t.languages.join(" · ")}</span>
                        <span>{t.formats.join(" / ")}</span>
                      </div>
                      <span className="grid size-9 place-items-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-cream">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Reveal as="div" split="none" className="flex flex-col items-start gap-4 border-b border-ink/15 py-20">
              <span className="label text-accent">No exact matches</span>
              <p className="max-w-md font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.03em]">
                The right expertise may not be listed yet — or may need a broader search.
              </p>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={clear} className="rounded-full bg-ink px-5 py-3 text-[0.82rem] font-semibold text-cream transition-colors duration-500 hover:bg-accent">
                  Clear filters
                </button>
                <Link href="/submit-listing" className="rounded-full border border-ink/25 px-5 py-3 text-[0.82rem] font-semibold transition-colors duration-500 hover:border-ink">
                  Join as a trainer
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 border-b border-ink/12 pb-5">
      <span className="label mb-3 block text-[0.56rem] text-muted">{title}</span>
      {children}
    </div>
  );
}
