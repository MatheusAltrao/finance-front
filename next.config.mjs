/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'logopng.com.br',
            }
        ]
    }
};

export default nextConfig;
