/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'image.oliveyoung.co.kr' },
      { protocol: 'https', hostname: 'www.wiggle-wiggle.com' },
      { protocol: 'https', hostname: 'm.wiggle-wiggle.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/product.html',
        destination: '/product/:id',
        has: [{ type: 'query', key: 'id', value: '(?<id>.+)' }],
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
