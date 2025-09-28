import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    inlineCss: true,
  },
};

export default nextConfig;
