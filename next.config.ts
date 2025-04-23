import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      "images.unsplash.com", // для аватарок из Unsplash
      "lh3.googleusercontent.com", // если юзер залогинился через Google
    ],
  },
};

export default nextConfig;
