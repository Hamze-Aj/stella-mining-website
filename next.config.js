/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable server-side features (API routes, SSR)
  // If you need static export, you can add it back but API routes won't work
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig




