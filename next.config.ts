import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add Cloudflare-specific configuration
  output: "standalone", // Creates a standalone build that works well with Cloudflare
};

export default nextConfig;
