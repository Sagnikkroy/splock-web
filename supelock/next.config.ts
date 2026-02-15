/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/splock-web" : "",
  assetPrefix: isProd ? "/splock-web/" : ""
};

module.exports = nextConfig;
