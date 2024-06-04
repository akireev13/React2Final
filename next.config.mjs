/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/programs",
        permanent: true, // Set to true for permanent redirect (301), false for temporary redirect (302)
      },
    ];
  },
};

export default nextConfig;
