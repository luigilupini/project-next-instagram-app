/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cloudflare-ipfs.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
