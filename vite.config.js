// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
const ASSET_URL = process.env.ASSET_URL || '';

const challenges = {};
challenges['main'] = resolve(__dirname, 'index.html');
for (let i = 1; i <= 28; i++) {
  challenges[`challenges/${i}/app`] = resolve(__dirname, `./challenges/${i}/app.js`);
  challenges[`challenges/${i}/index`] = resolve(__dirname, `./challenges/${i}/index.html`);
}

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
      input: challenges
    },
    copy: [
      {
        from: 'public/sounds/**/*',
        to: './assets/public/sounds/'
      },
      {
        from: 'public/videos/**/*',
        to: './assets/public/videos/'
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
