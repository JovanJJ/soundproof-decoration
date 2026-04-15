const { hostname } = require("os")

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'arturel.com'
      },
      {
        protocol: 'https',
        hostname: 'www.bobvila.com',
      }
    ],
  },
}

module.exports = nextConfig
