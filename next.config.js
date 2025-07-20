/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // 1️⃣ Write both pages and the _next folder into out/dj-crazy-times
  distDir: "out/dj-crazy-times",

  // 2️⃣ No basePath: we want our site at the root of whatever domain it lives on
  // basePath: undefined,

  // 3️⃣ Prefix all static assets (CSS/JS/fonts) with a leading slash
  //    This satisfies next/font’s requirement, and on a custom domain `/` → root.
  assetPrefix: "/",

  // 4️⃣ Folder‐style routing so each page exports into its own folder
  trailingSlash: true,

  images: { unoptimized: true },
};

module.exports = nextConfig;
