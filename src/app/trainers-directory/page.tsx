import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Directory } from "@/components/trainers/Directory";
import { trainers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Find trainers",
  description:
    "Discover trainers, coaches, mentors and experts across India by expertise, category, city, language and delivery format.",
  alternates: { canonical: "/trainers-directory" },
};

export default function TrainersDirectoryPage() {
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Find trainers"
        title={
          <>
            Find the right expertise. <em className="flourish">Not just a name.</em>
          </>
        }
        intro="Search professionals by expertise, category, specialisation, location, experience, audience, language and delivery format. Every profile is structured to help you understand the fit."
        meta={[`${trainers.length} profiles`, `${new Set(trainers.flatMap((t) => t.languages)).size} languages`, "Online & in-person"]}
      />

      <div className="border-b border-ink/15 bg-paper-2/40">
        <div className="gutter grid gap-4 py-4 text-[0.68rem] uppercase tracking-[0.1em] text-muted sm:grid-cols-3">
          <span className="flex items-center gap-2"><span className="size-1 rounded-full bg-accent" /> Free for organisations to search</span>
          <span className="flex items-center gap-2"><span className="size-1 rounded-full bg-accent" /> Structured professional profiles</span>
          <span className="flex items-center gap-2"><span className="size-1 rounded-full bg-accent" /> Connect directly, no commission</span>
        </div>
      </div>

      <Suspense fallback={<div className="gutter py-20 label text-muted">Loading the network…</div>}>
        <Directory />
      </Suspense>
    </>
  );
}
