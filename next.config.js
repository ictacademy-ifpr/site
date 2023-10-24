/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Add basePath
  basePath: '/github-pages',

  // Define o diretório de saída
  distDir: 'out'
}

module.exports = nextConfig
