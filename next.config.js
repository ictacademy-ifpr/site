/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,

  // Add basePath
  basePath: '/github-pages', 
}

module.exports = nextConfig
