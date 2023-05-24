/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
  env: {
    // strapiHost: (process.env.NODE_ENV === "development") ? "http://127.0.0.1:1337" : "https://portfolio-website-production-2c01.up.railway.app"
    strapiHost: "https://portfolio-website-production-2c01.up.railway.app"
  }
}

module.exports = nextConfig
