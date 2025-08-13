/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Matikan minify
  experimental: {
    optimizeCss: false, // Matikan CSS optimizer lightningcss
  },
};

export default nextConfig;
