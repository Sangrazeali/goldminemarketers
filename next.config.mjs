// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', 
    images: {
        unoptimized: true,  // Disable image optimization for static export
      }, // Use static export output
    experimental: {
      appDir: true,  // Enable the new app directory features
    },
  };
  
  export default nextConfig;
  