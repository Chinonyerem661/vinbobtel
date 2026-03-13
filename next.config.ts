import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinbobtel.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
