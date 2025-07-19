/** @type {import('next').NextConfig} */
const isProd = true;

/**
 * Use relative paths for static assets so they resolve correctly
 * under GitHub Pages' /<repo>/ prefix.
 */
const nextConfig = {
  output: "export",
  // Prefix assets with './' in production for correct relative loading
  assetPrefix: isProd ? "./" : "",
  // Ensure trailing slashes so pages and assets are served from folders
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
