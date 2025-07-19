/** @type {import('next').NextConfig} */
// Enable full static export
const isProd = true;

// Your GitHub Pages site URL
const GITHUB_PAGES_URL = "https://code-by-luis.github.io/dj-crazy-times";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Use the full URL for static assets (required by next/font)
  assetPrefix: isProd ? GITHUB_PAGES_URL : "",
  // No basePath – pages export to root of 'out/'
  // GH Pages will serve them under '/dj-crazy-times/'.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
