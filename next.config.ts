import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  images: {
    formats: ["image/webp"],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // 301 redirect: non-www → www (fixes "Duplicate, Google chose different canonical" in GSC)
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "spinpickonline.com" }],
      destination: "https://www.spinpickonline.com/:path*",
      permanent: true,
    },
  ],
  // Security headers for trust signals
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;
