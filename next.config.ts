import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://img1.wsimg.com/**')]
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    const fileLoaderRule: any = config.module.rules.find(
      (rule: any) => rule.test?.test?.('.svg')
    );

    // Keep `import icon from './x.svg?url'` as a URL:
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      // All other `*.svg` imports -> React components via SVGR
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer ?? /\.[jt]sx?$/,
        resourceQuery: { not: [...(fileLoaderRule?.resourceQuery?.not ?? []), /url/] },
        use: ['@svgr/webpack'],
      }
    );

    // Don’t also treat svg as a file asset
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
