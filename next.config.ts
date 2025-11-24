import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // <-- İŞTE İZİN VERDİĞİMİZ YER
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Eskiler de bozulmasın diye kalsın
      },
    ],
  },
};

export default nextConfig;