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
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net", // for Simple Icons, Framer Motion
      },
      {
        protocol: "https",
        hostname: "unpkg.com",
      },
      {
        protocol: "https",
        hostname: "cdnjs.cloudflare.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", 
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", 
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", 
      },
      {
        protocol: "https",
        hostname: "googlechromelabs.github.io",
      },
      
    ],
  },
};

export default nextConfig;
