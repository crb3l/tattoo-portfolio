/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: "/portfolio-next-js", ## only used if no custom domain is used...
  // assetPrefix: "/portoflio-next-js",
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig