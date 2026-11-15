import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { site } from "@/lib/site";

type Doc = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const docs: Record<string, Doc> = {
  "privacy-policy": {
    title: "Privacy policy",
    eyebrow: "Privacy",
    intro:
      "This policy explains what information Trainers Connect collects, why we collect it and how it is used when you browse the network, create a profile or send an enquiry.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you create a trainer profile, we collect the professional information you choose to provide: your name, contact details, city, languages, expertise, experience, certifications, audiences and delivery formats.",
          "When you send an enquiry or contact the team, we collect the details you submit, such as your name, email address, phone number, organisation and requirement.",
          "We may also collect basic technical information such as browser type, device type and pages visited, to understand how the platform is used and to keep it secure.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "To publish and maintain trainer profiles, help organisations discover relevant professionals, respond to enquiries, improve the platform and communicate service updates.",
          "We do not sell personal information. Profile information is intended to be visible to people searching the network. Contact details are shared only as needed to respond to an enquiry or as described at the point of collection.",
        ],
      },
      {
        heading: "Cookies and analytics",
        body: [
          "The platform may use essential cookies for sign-in and session management, and privacy-respecting analytics to understand aggregate usage. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can request access to, correction of, or deletion of the personal information associated with your profile by writing to us. You can also update most profile information directly from your account.",
          `For any privacy request, contact ${site.email}.`,
        ],
      },
      {
        heading: "Data retention and security",
        body: [
          "We retain information for as long as needed to provide the service or meet legal obligations. We use reasonable technical and organisational measures to protect information, though no system can be guaranteed completely secure.",
        ],
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms & conditions",
    eyebrow: "Terms",
    intro:
      "These terms govern the use of Trainers Connect. By using the platform, you agree to use it lawfully, provide accurate information and respect the professionals and organisations in the network.",
    sections: [
      {
        heading: "Our role",
        body: [
          "Trainers Connect is a discovery platform. We connect organisations and individuals with independent trainers, coaches, mentors and experts. We do not employ the professionals listed, and we do not conduct the training ourselves unless a specific managed service states otherwise.",
          "The actual engagement, scope of work, professional fees, schedule and commercial terms are agreed directly between the client and the selected professional.",
        ],
      },
      {
        heading: "Profiles and accuracy",
        body: [
          "Trainers are responsible for the accuracy of the information they publish, including qualifications, certifications, experience and areas of expertise. Profiles are reviewed for completeness, not independently verified unless stated.",
          "Organisations should review a professional's profile and credentials and clarify requirements directly before finalising an engagement.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You agree not to misuse the platform, submit false information, scrape personal data, send unsolicited commercial messages, or use the network for unlawful or discriminatory purposes.",
          "We may suspend or remove a profile that breaches these terms or undermines the integrity of the network.",
        ],
      },
      {
        heading: "Membership and fees",
        body: [
          "Trainer membership operates on an annual model. The applicable fee and benefits are communicated during registration. Membership does not guarantee enquiries, clients or assignments.",
          "Searching the network is free for organisations and individuals. Any fee for a training engagement is agreed directly with the selected professional.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The Trainers Connect name, design and platform content belong to Trainers Connect. Trainers retain ownership of the professional content they publish and grant us permission to display it as part of the network.",
        ],
      },
      {
        heading: "Governing law",
        body: ["These terms are governed by the laws of India, with courts in Bengaluru, Karnataka having jurisdiction."],
      },
    ],
  },
  "refund-and-returns-policy": {
    title: "Refund & returns policy",
    eyebrow: "Refunds",
    intro:
      "This policy applies to annual trainer membership fees paid to Trainers Connect. It does not apply to fees paid directly to a trainer for a training engagement.",
    sections: [
      {
        heading: "Membership fees",
        body: [
          "Trainer membership is an annual subscription that provides access to a professional profile and the discovery features of the platform. Fees are communicated clearly before payment.",
        ],
      },
      {
        heading: "Cancellation and refunds",
        body: [
          "If a membership was purchased in error, or a profile has not been published, please contact us within seven days of payment and we will review the request.",
          "Refunds are considered on a case-by-case basis. Where a refund is approved, it is processed to the original payment method within a reasonable period.",
          "Because membership provides immediate access to a professional profile and the network, fees for a membership that has already been used may not be refundable in full.",
        ],
      },
      {
        heading: "Training engagements",
        body: [
          "Payments for training, coaching or mentoring engagements are made directly to the professional. Cancellation, rescheduling and refund terms for those engagements are agreed between the client and the professional.",
        ],
      },
      {
        heading: "Contact",
        body: [`To request a refund review, write to ${site.email} with your registered email address and payment reference.`],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = docs[slug];
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.intro,
    alternates: { canonical: `/legal/${slug}` },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docs[slug];
  if (!doc) notFound();

  return (
    <>
      <PageHeader index="—" eyebrow={doc.eyebrow} title={doc.title} intro={doc.intro} meta={["Last updated November 2026", "Trainers Connect"]} />
      <section className="gutter py-14 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <span className="label text-accent">On this page</span>
              <ol className="mt-4 flex flex-col gap-2.5 border-t border-ink/15 pt-4">
                {doc.sections.map((s, i) => (
                  <li key={s.heading} className="flex gap-3 text-[0.76rem] leading-snug text-ink-2">
                    <span className="text-[0.58rem] tabular text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.heading}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
          <div className="prose-editorial lg:col-span-8">
            {doc.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ))}
            <div className="callout mt-10">
              This page is a readable summary prepared for the design preview. The final policy should be reviewed by
              the client before publication.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
