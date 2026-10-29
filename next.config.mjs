/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/tattoo-portfolio", //## only used if no custom domain is used...
  assetPrefix: "/tattoo-portfolio",
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig