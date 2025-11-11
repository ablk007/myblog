/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  images: {
    domains: ['localhost'],
  },
  // Allow loading static assets from the admin folder
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig
