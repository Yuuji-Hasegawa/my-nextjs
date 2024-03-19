/** @type {import('next').NextConfig} */
import path from 'path';
import stylexPlugin from '@stylexjs/nextjs-plugin';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
};

const stylexConfig = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})(nextConfig);

export default stylexConfig;

//export default nextConfig;
