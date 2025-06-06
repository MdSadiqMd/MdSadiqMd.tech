import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
async function setupDevelopmentEnvironment() {
    // Set up development environment only if running in development mode
    if (process.env.NODE_ENV === 'development') {
        await setupDevPlatform();
    }
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

export default nextConfig;
