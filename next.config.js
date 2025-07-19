/** @type {import('next').NextConfig} */
const isProd = true;
const repoName = "dj-crazy-times";

// In production, serve under /dj-crazy-times and prefix assets accordingly
const basePath = isProd ? `/${repoName}` : "";
// Include trailing slash for assetPrefix, so URLs are '/dj-crazy-times/_next/...'
const assetPrefix = isProd ? `/${repoName}/` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  // Ensure trailing slashes so GitHub Pages routing works correctly
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: "akamai",
    // Use the same prefix for image paths
    path: assetPrefix,
  },
};

module.exports = nextConfig;
