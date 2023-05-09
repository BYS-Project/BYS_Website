/** @type {import('next').NextConfig} */
const production = false;
const nextConfig = !production
  ? {
      output: "export",
      images: {
        unoptimized: true,
      },
    }
  : {};

module.exports = nextConfig;
