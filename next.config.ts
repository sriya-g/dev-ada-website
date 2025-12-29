import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dev-ada-website",
  assetPrefix: "/dev-ada-website",
  images: { unoptimized: true },
};

export default nextConfig;
