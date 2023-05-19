/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["dummyimage.com"],
  }
}

module.exports = nextConfig
