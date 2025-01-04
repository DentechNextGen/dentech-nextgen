/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dentech.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx']
    }
    return config
  }
}

export default nextConfig 