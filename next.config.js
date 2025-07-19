/** @type {import('next').NextConfig} */
const isProd = true;
const repoName = "dj-crazy-times";

/**
 * Static export configuration for GitHub Pages:
 * - basePath and assetPrefix ensure correct URL prefixes
 * - trailingSlash for folder-style routing
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Serve app under /dj-crazy-times in production
  basePath: isProd ? `/${repoName}` : "",
  // Prefix asset URLs with /dj-crazy-times
  assetPrefix: isProd ? `/${repoName}` : "",
  // Use folder pages (e.g., /about/)
  trailingSlash: true,
  // Fonts and images
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
