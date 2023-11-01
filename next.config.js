/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/dwaynehbrown/Agent0",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.gravatar.com',
        port: '',
        pathname: '**',
      },      
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '**',
      },      
      {
        protocol: 'https',
        hostname: '*.figma.com',
        port: '',
        pathname: '**',
      },      
      {
        protocol: 'https',
        hostname: '*.gstatic.com',
        port: '',
        pathname: '**',
      }
    ],
  },

};

module.exports = nextConfig;
