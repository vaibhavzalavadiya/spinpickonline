import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

// Generate page metadata following SEO rules
export function generateMetadata({
  title,
  description,
  canonical,
  robots = "index, follow",
  ogImage,
}: {
  title: string;
  description: string;
  canonical: string;
  robots?: "index, follow" | "noindex, follow" | "noindex, nofollow";
  ogImage?: string;
}): Metadata {
  // Validate title length (30-60 chars)
  // if (title.length < 30 || title.length > 60) {
  //   console.warn(`Title "${title}" is ${title.length} characters. Should be 30-60.`);
  // }

  // Validate description length (120-160 chars)
  // if (description.length < 120 || description.length > 160) {
  //   console.warn(`Description "${description}" is ${description.length} characters. Should be 120-160.`);
  // }

  const canonicalUrl = getCanonicalUrl(canonical);
  const [index, follow] = robots.split(", ");

  return {
    title,
    description,
    robots: {
      index: index === "index",
      follow: follow === "follow",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage || `${SITE_CONFIG.url}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage || `${SITE_CONFIG.url}/opengraph-image.png`],
    },
  };
}

// Generate Organization schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      // Add social media links when available
    ],
  };
}

// Generate WebSite schema
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  };
}

// Generate WebApplication schema
export function generateWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Random Picker Wheel",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  };
}

// Generate FAQPage schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate HowTo schema
export function generateHowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; position: number }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
      position: step.position,
    })),
  };
}

// Generate Article schema
export function generateArticleSchema({
  headline,
  datePublished,
  dateModified,
}: {
  headline: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    datePublished,
    dateModified,
  };
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

