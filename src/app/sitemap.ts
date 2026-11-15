import type { MetadataRoute } from "next";
import { posts, trainers } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/about-us", "/how-it-works", "/trainers-directory", "/faq", "/blogs", "/contact-us", "/submit-listing", "/sign-in"];

  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...trainers.map((t) => ({
      url: `${SITE_URL}/trainers-directory/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blogs/${p.slug}`,
      lastModified: new Date(p.dateISO),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...["privacy-policy", "terms-and-conditions", "refund-and-returns-policy"].map((slug) => ({
      url: `${SITE_URL}/legal/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
