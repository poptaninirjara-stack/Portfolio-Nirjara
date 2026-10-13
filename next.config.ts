import type { NextConfig } from "next";

// Next's `permanent: true` sends 308. The brief asks for 301, so the status
// code is set explicitly.
const moved = (source: string, destination: string) => ({
  source,
  destination,
  statusCode: 301 as const,
});

const nextConfig: NextConfig = {
  async redirects() {
    return [
      moved("/work", "/writing"),
      moved("/work/:slug*", "/writing/:slug*"),
      moved("/services", "/writing"),
      moved("/Nirjara-Poptani-Resume.pdf", "/cv.pdf"),
    ];
  },
};

export default nextConfig;
