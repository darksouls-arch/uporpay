import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  // Allow LAN/dev origins to load HMR + bundles so the page hydrates
  // when you test from your phone on the same WiFi.
  allowedDevOrigins: ["192.168.29.37", "*.local"],
};

export default nextConfig;
