/** @type {import('next').NextConfig} */
const nextConfig = {
  // full static HTML export
  output: "export",
  // folder‐style routing (so /about/ → about/index.html)
  trailingSlash: true,
  // no image optimization for static export
  images: { unoptimized: true },
  // RELATIVE paths for all assets in prod (works on any domain)
  assetPrefix: "./",
};

module.exports = nextConfig;
