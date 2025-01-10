import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neon-purple-apple.vercel.app', // Replace with your actual Neon database hostname
      },
      {
        protocol: 'https',
        hostname: 'postedproductions.vercel.app', // For Vercel-hosted URLs if images come from there
      },
    ],
  },
};

export default nextConfig;

