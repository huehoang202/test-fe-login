const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  experimental: {
    esmExternals: 'loose'
  },
  output: 'standalone'
};

module.exports = nextConfig;