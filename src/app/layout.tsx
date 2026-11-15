import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { DemoNotice, Watermark } from "@/components/layout/DemoNotice";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { display, mono, sans } from "@/lib/fonts";
import { SITE_URL, site } from "@/lib/site";
import { SmoothScroll } from "@/motion/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Concept rebuild by Tagda Studio`,
    template: `%s · ${site.name} (concept)`,
  },
  description: `${site.description} A concept rebuild by Tagda Studio — not the live Trainers Connect website.`,
  applicationName: site.name,
  keywords: [
    "trainers in India",
    "find a trainer",
    "corporate training",
    "leadership coach",
    "soft skills trainer",
    "trainer network",
    "trainers connect",
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} — Concept rebuild by Tagda Studio`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4efe4",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: site.name,
              url: SITE_URL,
              description: site.description,
              email: site.email,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.line}, ${site.address.area}`,
                addressLocality: site.address.city,
                postalCode: site.address.pin,
                addressCountry: "IN",
              },
              sameAs: site.socials.map((s) => s.href),
            }),
          }}
        />
        <SmoothScroll>
          <ScrollProgress />
          <a
            href="#main"
            className="label sr-only z-[110] rounded-full bg-accent px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <DemoNotice />
          <Header />
          <main id="main" className="overflow-x-clip">
            {children}
          </main>
          <Footer />
          <Watermark />
        </SmoothScroll>
      </body>
    </html>
  );
}
