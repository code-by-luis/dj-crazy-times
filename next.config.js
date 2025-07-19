/** @type {import('next').NextConfig} */
const isProd = true;
const repoName = "dj-crazy-times";

/**
 * Export entire site into `out/dj-crazy-times` via `distDir`,
 * apply GitHub Pages paths for both pages and fonts/assets.
 */
const nextConfig = {
  output: "export",
  // Emit build & export into out/dj-crazy-times
  distDir: `out/${repoName}`,
  // Serve site under /dj-crazy-times on GitHub Pages
  basePath: isProd ? `/${repoName}` : "",
  // Prefix static assets (including next/font files) with /dj-crazy-times/
  assetPrefix: isProd ? `/${repoName}/` : "",
  // Use folder-style routing for static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
