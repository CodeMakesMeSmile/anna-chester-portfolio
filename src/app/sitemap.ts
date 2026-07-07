import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...caseStudySlugs.map((slug) => ({
      url: `${site.url}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
