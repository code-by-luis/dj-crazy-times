/** @type {import('next').NextConfig} */
const isProd = true;
const repoName = "dj-crazy-times";

/**
 * Configure basePath and assetPrefix so that Next.js export
 * and Next Font work correctly under GitHub Pages:
 * - basePath ensures pages and assets are output under /dj-crazy-times
 * - assetPrefix rewrites URLs to match that prefix
 */
const nextConfig = {
  output: "export",
  // When in production, prefix all routes and assets
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}` : "",
  // Keep folder-style routing to match GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
