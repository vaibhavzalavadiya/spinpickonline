import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Use a fixed date that reflects the actual last deployment/content update.
  // UPDATE this date whenever you make meaningful content changes and deploy.
  // Using new Date() was wrong — it told Google every page changed on every crawl,
  // causing Google to distrust our lastmod values entirely.
  const lastContentUpdate = new Date("2026-07-13T00:00:00Z");

  // Core tool pages (highest priority)
  const corePages = [
    { path: "", priority: 1, changeFrequency: "daily" as const },
    { path: "/wheel", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/random-picker-wheel", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/name-picker", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/name-spinner", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/yes-no-wheel", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  // SEO landing pages (high priority — each has unique 1000+ word content)
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
    "/wheel-of-names",
    "/flip-a-coin",
    "/food-picker-wheel",
    "/random-letter-generator",
    "/team-name-generator",
    "/randomizer-wheel",
    "/random-group-generator",
    "/instagram-giveaway-picker",
    // Dedicated tool pages
    "/team-picker",
    "/classroom-activities",
    "/giveaway-winner",
    // International language pages
    "/ruleta-aleatoria",
    "/roda-da-sorte",
    "/roue-aleatoire",
    "/zufallsrad",
    "/roda-putar",
  ];

  // Info/resource pages (medium priority)
  const infoPages = [
    "/faq",
    "/use-cases",
    "/features",
    "/how-it-works",
    "/guides",
    "/guides/how-to-use-random-picker-wheel",
    "/guides/how-to-run-a-raffle",
    "/guides/spin-wheel-tips",
    "/guides/fair-random-selection",
    "/guides/giveaway-rules-template",
    "/guides/classroom-engagement-strategies",
    "/contact",
    "/about",
  ];

  // Blog pages
  const blogPages = [
    "/blog",
    "/blog/spin-wheel-for-giveaways",
    "/blog/random-team-generator",
    "/blog/wheel-of-fortune-classroom",
    "/blog/picking-names-for-prizes",
    "/blog/virtual-team-building-ideas",
    "/blog/overcoming-choice-paralysis",
    "/blog/office-party-game-ideas",
    "/blog/chore-wheel-for-families",
    "/blog/spin-wheel-for-teachers",
    "/blog/random-number-generator-uses",
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

  // NOTE: Thin template pages (lunch-decisions, chore-assignment, task-assignment,
  // presentation-picker, customization, mobile-friendly, shareable-wheels,
  // fair-randomization) are intentionally excluded from the sitemap.
  // They still exist as routes via [slug] but we don't ask Google to index them
  // because they use generic template content and dilute crawl quality signals.

  return [
    ...corePages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: lastContentUpdate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...seoLandingPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastContentUpdate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...infoPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legalPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastContentUpdate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}

