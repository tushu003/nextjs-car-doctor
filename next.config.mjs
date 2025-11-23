/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
       
      },
        {
        protocol: 'https',
        hostname: 'ibb.co.com',
      },
        {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
    ],
  },
}
export default nextConfig;
