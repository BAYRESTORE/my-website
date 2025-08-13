/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Matikan minify biar nggak pakai lightningcss
  experimental: {
    optimizeCss: false, // Matikan CSS optimizer yang pakai lightningcss
  },
};

export default nextConfig;
