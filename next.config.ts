import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  // Optimize package imports to eliminate dead JS & icon weight
  experimental: {
    optimizePackageImports: ["react-icons", "react-icons/fi", "react-icons/io5", "react-icons/hi"],
  },
  // 301 redirect: non-www → www (fixes "Duplicate, Google chose different canonical" in GSC)
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "spinpickonline.com" }],
      destination: "https://www.spinpickonline.com/:path*",
      permanent: true,
    },
  ],
  // Headers: Security & Long-term Static Caching
  headers: async () => [
    {
      source: "/((?!embed).*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/embed",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Content-Security-Policy", value: "frame-ancestors *" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/embed/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Content-Security-Policy", value: "frame-ancestors *" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/(images|icons|sounds|fonts)/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/manifest.json",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=86400, stale-while-revalidate=604800",
        },
      ],
    },
    {
      source: "/favicon.png",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

export default nextConfig;
