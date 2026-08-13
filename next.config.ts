import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev-only route indicator ("N" badge) is not part of the site design;
  // hide it so it never shows up in QA/production-parity screenshots.
  devIndicators: false,
};

export default nextConfig;
