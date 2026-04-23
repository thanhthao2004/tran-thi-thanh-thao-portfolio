/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tran-thi-thanh-thao-portfolio',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
