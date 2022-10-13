/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;

// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
//   runtimeCaching,
//   swcMinify: true,
//   experimental: {
//     // Enables the styled-components SWC transform
//     styledComponents: true
//   },
//   pwa: {
//     dest: "public",
//     disable: process.env.NODE_ENV === "development"
//   }
// });
