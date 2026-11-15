import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { JournalIndex } from "@/components/journal/JournalIndex";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal & insights",
  description:
    "Read insights from trainers, coaches, mentors and industry professionals on expertise, learning, discoverability and the business of training.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="The journal"
        title={
          <>
            Notes on expertise, learning and the <em className="flourish">business of training.</em>
          </>
        }
        intro="Practical reading for trainers building a practice, and for the organisations looking for the right capability. Written from inside the training room."
        meta={[`${posts.length} pieces`, "Issue 01", "Updated Oct 2026"]}
      />
      <JournalIndex />
    </>
  );
}
