/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add GLSL loader rule
      config.module.rules.push({
        test: /\.(glsl|vs|fs)$/,
        exclude: /node_modules/,
        use: ['glsl-shader-loader'],
      });
  
      // Important: return the modified config
      return config;
    },
  };
  
  export default nextConfig;
  