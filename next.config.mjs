/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Matikan penggunaan lightningcss di Termux/ARM
  experimental: {
    optimizeCss: false,
    swcMinify: true,
  },
};

export default nextConfig;
