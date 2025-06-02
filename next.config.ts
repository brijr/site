import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  async redirects() {
    return [
      {
        source: "/x",
        destination: "https://x.com/bridgertower",
        permanent: true,
      },
      {
        source: "/yt",
        destination: "https://youtube.com/@bridgertower",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@bridgertower",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/brijr",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/brijr",
        permanent: true,
      },
      {
        source: "/30",
        destination: "https://cal.com/brijr/30min",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
