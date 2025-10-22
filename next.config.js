/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      // Cache all static Next.js assets
      {
        source: "/_next/static/(.*)\\.(jpg|jpeg|png|gif|svg|webp|ico|woff2?|ttf)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache all images and icons in /public
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|svg|webp|ico|woff2?|ttf)$",
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

module.exports = nextConfig;
