import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/portfolio-eco',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
