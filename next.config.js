/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.tmdb.org", "lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
