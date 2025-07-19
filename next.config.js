/** @type {import('next').NextConfig} */
const isProd = true;
const repoName = "dj-crazy-times";

// Use absolute prefixes for GitHub Pages compatibility and next/font
const basePath = isProd ? `/${repoName}` : "";
const assetPrefix = isProd ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  // Ensure pages and assets serve from folders on GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
