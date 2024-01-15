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

  experimental: {
    outputFileTracingExcludes: {
      "*": [
        "node_modules/@swc/core-linux-x64-gnu",
        "node_modules/@swc/core-linux-x64-musl",
        "node_modules/@esbuild/linux-x64",
      ],
    },
  }

};
// import :export

export default nextConfig;