/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    transpilePackages: ["@acme/ui-ecommerce"],
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
};

export default config;
