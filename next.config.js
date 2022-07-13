/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/success",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
