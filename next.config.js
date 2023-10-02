/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // output: "export",
  // distDir: "dist",
  // images: {unoptimized: true}
}

module.exports = nextConfig
