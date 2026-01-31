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
};

export default nextConfig;
