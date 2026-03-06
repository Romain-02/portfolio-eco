import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.jsdelivr.net" },
            { protocol: "https", hostname: "img.alwaysdata.com" },
            { protocol: "https", hostname: "remiflandrois.fr" },
        ],
    },
};

export default nextConfig;
