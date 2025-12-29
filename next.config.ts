import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dev-ada-website",  // add this
  images: { unoptimized: true },
};

export default nextConfig;
