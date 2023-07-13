/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true
  },
};

module.exports = withContentlayer(nextConfig);
