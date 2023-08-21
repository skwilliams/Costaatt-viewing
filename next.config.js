/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    // config.module.rules.push({
    //   test: /\.(png|svg|jpe?g|gif|pdf)$/i,
    //   use: [
    //     {
    //       loader: 'file-loader',
    //       options: {
    //         name: '[name].[ext]',
    //       },
    //     },
    //   ],
    // });
    return config;
  },
};

module.exports = nextConfig;
