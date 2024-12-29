/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["@libsql/client"],
  },
};

module.exports = withContentlayer(nextConfig);
