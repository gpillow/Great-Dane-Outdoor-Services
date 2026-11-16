import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      { source: '/pressure-washing-fayetteville-ar', destination: '/services', permanent: true },
      { source: '/christmas-lights-fayetteville-ar', destination: '/services', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(jpg|jpeg|png|webp|avif|gif|ico|svg|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
