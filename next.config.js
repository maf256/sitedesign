/** @type {import('next').NextConfig} */
const nextConfig = {
  babel: {
    plugins: [['styled-components', { ssr: true }]],
  },
  reactStrictMode: true
}

module.exports = nextConfig
