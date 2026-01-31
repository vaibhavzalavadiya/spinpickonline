import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { USE_CASES, FEATURES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages = [
    "",
    "/wheel",
    "/random-picker-wheel",
    "/name-picker",
    "/name-spinner",
    "/yes-no-wheel",
    "/faq",
    "/use-cases",
    "/features",
    "/how-it-works",
    "/guides",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  // Use case pages
  const useCasePages = USE_CASES.map((useCase) => ({
    url: `${baseUrl}/${useCase.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Feature pages
  const featurePages = FEATURES.map((feature) => ({
    url: `${baseUrl}/${feature.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/wheel" ? ("daily" as const) : ("weekly" as const),
      priority: path === "" ? 1 : 0.9,
    })),
    ...useCasePages,
    ...featurePages,
  ];
}

