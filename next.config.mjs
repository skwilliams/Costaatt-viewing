/** @type {import('next').NextConfig} */
  import withVideos from "next-videos";


// next.config.js




const nextConfig = {



  // next.config.js


  reactStrictMode: true,
  // output:'export',

  
  // experimental: {

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
   
    return config;
  },





  //   outputFileTracingExcludes: {
  //     "*": [
  //       "node_modules/@swc/core-linux-x64-gnu",
  //       "node_modules/@swc/core-linux-x64-musl",
  //       "node_modules/@esbuild/linux-x64",
  //     ],
  //   },
  // },
  // sassOptions: {
  //   // includePaths: [path.join(__dirname, "styles")],
  //   prependData: `@use "~/styles/abstracts/mixins.scss";`,
  // },
};




export default withVideos(nextConfig);