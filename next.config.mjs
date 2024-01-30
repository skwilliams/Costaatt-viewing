/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output:'export',

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
   
    return config;
  },

  // experimental: {
  //   outputFileTracingExcludes: {
  //     "*": [
  //       "node_modules/@swc/core-linux-x64-gnu",
  //       "node_modules/@swc/core-linux-x64-musl",
  //       "node_modules/@esbuild/linux-x64",
  //     ],
  //   },
  // },
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "~/styles/abstracts/mixins.scss";`,
  },
};


export default nextConfig;