/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    titleName: 'keychain',
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;
