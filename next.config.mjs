/** @type {import('next').NextConfig} */

import { promises as fs } from "fs";
import path from "path";

const nextConfig = {
  webpack: (config) => {
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.done.tapPromise("CopyPublicJs", async () => {
          const sourceDir = path.resolve("public/js");
          const destDir = path.resolve(".next/static/js");

          try {
            await fs.mkdir(destDir, { recursive: true });

            const files = await fs.readdir(sourceDir);
            await Promise.all(
              files.map((file) =>
                fs.copyFile(`${sourceDir}/${file}`, `${destDir}/${file}`)
              )
            );
          } catch (err) {
            console.error("Error copying JS files:", err);
          }
        });
      },
    });

    return config;
  },
};

export default nextConfig;
