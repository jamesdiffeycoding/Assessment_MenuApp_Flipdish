import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flipdish.imgix.net",
      },
    ],
  },
};

export default nextConfig;
