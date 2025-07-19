/** @type {import('next').NextConfig} */
const isProd = true;
const repoName = "dj-crazy-times";

/**
 * Export entire site into `out/dj-crazy-times/` via `distDir`
 * and use relative asset paths so CSS/JS resolve correctly.
 */
const nextConfig = {
  // Generate a fully static export
  output: "export",
  // Override the output directory (for both build and export)
  distDir: `out/${repoName}`,
  // Keep folder-style routing for HTML files
  trailingSlash: true,
  // Use relative paths for assets so they work under the subfolder
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
