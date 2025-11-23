// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // tell Next to create static files in /out
  trailingSlash: true, // so /about -> /about/index.html (good for shared hosting)
  reactCompiler: true,
  images: {
    unoptimized: true, // disable Next image optimization (required with output: "export")
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
