import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['peyton.im'],
  },
  // Ensure proper handling of trailing slashes
  trailingSlash: false,
  // Enable production optimizations
  swcMinify: true,
};

export default nextConfig;
