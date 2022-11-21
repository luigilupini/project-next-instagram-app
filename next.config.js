/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cloudflare-ipfs.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "googleapis.com",
      "firebasestorage.googleapis.com",
      "firestore.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
