import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Produce plain HTML/CSS/JavaScript in the out folder. GitHub Pages can serve
  // these files without running a Node.js/Next.js server.
  output: 'export',
  reactStrictMode: true,

  // Directory-style URLs such as /blog/welcome/ map naturally to
  // out/blog/welcome/index.html on a static host.
  trailingSlash: true,
  images: {
    // Next.js's on-demand image optimizer needs a server. Static export instead
    // emits the original image URL so GitHub Pages can serve it directly.
    unoptimized: true,
  },
};

export default nextConfig;
