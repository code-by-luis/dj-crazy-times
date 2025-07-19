/** @type {import('next').NextConfig} */
const isProd = true;
const repoName = "dj-crazy-times";

/**
 * For GitHub Pages deployment:
 * - No basePath: export pages to root of the out/ folder
 * - assetPrefix with trailing slash so static assets load from /repoName/_next/...
 * - trailingSlash to ensure correct folders
 */
const nextConfig = {
  output: "export",
  // Prefix static asset URLs with '/dj-crazy-times/'
  assetPrefix: isProd ? `/${repoName}/` : "",
  // Keep folder-style routing
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
