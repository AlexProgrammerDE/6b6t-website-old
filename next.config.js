const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net/npm/@widgetbot/crate@3 https://static.cloudflareinsights.com/beacon.min.js 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; connect-src 'self' https://api.mcsrvstat.us https://vitals.vercel-insights.com https://cloudflareinsights.com/cdn-cgi/rum; font-src 'self'; frame-src 'self' https://e.widgetbot.io; img-src 'self' https://cdn.discordapp.com data:; manifest-src 'self'; media-src 'self'; worker-src 'none';"
    }
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },
}

module.exports = nextConfig
