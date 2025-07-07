/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Ensure no trailing slashes to prevent redirect issues
  trailingSlash: false,
};

module.exports = nextConfig;
