/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval' https://codepen.io;
                child-src https://codepen.io;
                style-src 'self' 'unsafe-inline';
                img-src * blob: data:;
                media-src 'none';
                connect-src 'self';
                font-src 'self';
                object-src 'none';
                frame-ancestors 'self';
                base-uri 'self';
                form-action 'self';
              `.replace(/\s{2,}/g, ' ').trim()
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  