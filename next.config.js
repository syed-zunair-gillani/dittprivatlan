/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'backend.dittprivatlan.se',
              pathname: '**',
            },
          ],
        },
}

module.exports = nextConfig
