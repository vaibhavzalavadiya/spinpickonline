import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { USE_CASES, FEATURES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date("2026-02-28");

  // Core tool pages (highest priority)
  const corePages = [
    { path: "", priority: 1, changeFrequency: "daily" as const },
    { path: "/wheel", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/random-picker-wheel", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/name-picker", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/name-spinner", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/yes-no-wheel", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  // SEO landing pages (high priority)
  const seoLandingPages = [
    "/lucky-draw-wheel",
    "/raffle-wheel",
    "/prize-wheel",
    "/random-number-wheel",
    "/spin-wheel-for-giveaway",
    "/random-choice-picker",
    "/wheel-spinner",
    "/picker-wheel",
    "/decision-wheel",
  ];

  // Info/resource pages (medium priority)
  const infoPages = [
    "/faq",
    "/use-cases",
    "/features",
    "/how-it-works",
    "/guides",
    "/guides/how-to-use-random-picker-wheel",
    "/contact",
    "/about",
  ];

  // Blog pages
  const blogPages = [
    "/blog",
    "/blog/how-to-run-instagram-giveaway",
    "/blog/random-name-picker-for-teachers",
    "/blog/best-team-building-activities",
    "/blog/fair-raffle-drawing-guide",
    "/blog/decision-making-tips",
  ];

  // Legal pages (low priority)
  const legalPages = [
    "/privacy-policy",
    "/terms-of-service",
  ];

  // Use case pages
  const useCasePages = USE_CASES.map((useCase) => ({
    url: `${baseUrl}/${useCase.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Feature pages
  const featurePages = FEATURES.map((feature) => ({
    url: `${baseUrl}/${feature.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...corePages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...seoLandingPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...infoPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legalPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...useCasePages,
    ...featurePages,
  ];
}

