import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { DisciplineIndex } from "@/components/home/DisciplineIndex";
import { DisciplineMarquee } from "@/components/home/DisciplineMarquee";
import { HomeHero } from "@/components/home/HomeHero";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { Premise } from "@/components/home/Premise";
import { ProcessSticky } from "@/components/home/ProcessSticky";
import { SplitPaths } from "@/components/home/SplitPaths";
import { TrainerRail } from "@/components/home/TrainerRail";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Trainers Connect — concept rebuild by Tagda Studio`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: SITE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/trainers-directory?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <HomeHero />
      <DisciplineMarquee />
      <Premise />
      <DisciplineIndex />
      <ProcessSticky />
      <SplitPaths />
      <TrainerRail />
      <JournalTeaser />
      <CtaBand />
    </>
  );
}
