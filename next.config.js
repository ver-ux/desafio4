/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  secMinify: true,

  images: {
    domains: [
      'files.stripe.com',
    ]
  },

  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
