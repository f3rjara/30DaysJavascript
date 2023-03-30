// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
const ASSET_URL = process.env.ASSET_URL || '';

export default defineConfig ({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    minify: true,
    base: `${ASSET_URL}`,
    assetsDir: 'assets',
    assetsInlineLimit: 0,
    force: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'challenges/1/app': resolve(__dirname, './challenges/1/app.js'),
        'challenges/1/index': resolve(__dirname, './challenges/1/index.html'),
        'challenges/2/app': resolve(__dirname, './challenges/2/app.js'),
        'challenges/2/index': resolve(__dirname, './challenges/2/index.html'),
        'challenges/3/app': resolve(__dirname, './challenges/3/app.js'),
        'challenges/3/index': resolve(__dirname, './challenges/3/index.html'),
        'challenges/4/app': resolve(__dirname, './challenges/4/app.js'),
        'challenges/4/index': resolve(__dirname, './challenges/4/index.html'),
      }
    },
    copy: [
      {
        from: 'public/sounds/**/*',
        to: './assets/public/sounds/'
      },
      {
        from: 'public/**/*',
        to: './assets/public/'
      },
      {
        from: 'challenge/**/*',
        to: './assets/challenge/'
      },
    ]
  }
});
