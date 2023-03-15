// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig ({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    minify: true,
    base: 'https://f3rjara.github.io/30DaysJavascript/',
    assetsDir: 'assets',
    assetsInlineLimit: 0,
    force: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'challenges/1/app': resolve(__dirname, './challenges/1/app.js'),
        'challenges/1/index': resolve(__dirname, './challenges/1/index.html'),
      }
    },
    copy: [
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
