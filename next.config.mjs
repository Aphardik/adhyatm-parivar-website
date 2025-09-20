// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'dist',
     output: 'standalone',
    images: { unoptimized: true },
};


export default nextConfig;
