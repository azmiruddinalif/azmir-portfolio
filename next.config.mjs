/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supreme-actor-a1b5508506.media.strapiapp.com",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
