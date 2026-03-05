import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/portfolio-eco',
    images: {
        unoptimized: true, // obligatoire pour l'export statique
    },
};

export default nextConfig;
