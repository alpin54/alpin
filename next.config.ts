import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Resolve metadata before streaming HTML so tags stay in <head> for every client.
  htmlLimitedBots: /.*/,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src")],
  },
};

export default nextConfig;
