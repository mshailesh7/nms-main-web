/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    webpack(config, { isServer }) {
      // Ensure we only apply this rule to non-server (browser-side) code
      if (!isServer) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
      }
      return config;
    },  
  };
  