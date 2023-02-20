/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scdn.co',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '**.fbsbx.com',
        port: '',
        pathname: '/platform/**'
      }
    ]
  }
}

module.exports = nextConfig
