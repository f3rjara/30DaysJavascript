export default {
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
        main: './index.html'
      }
    },
    copy: [
      {
        // Especificar la ruta relativa a la carpeta raíz del proyecto
        // para la carpeta "fonts"
        from: 'public/fonts/**/*',
        to: './assets/public/fonts/'
      },
      {
        // Especificar la ruta relativa a la carpeta "src"
        // para la carpeta "img"
        from: 'public/src/img/**/*',
        to: './assets/public/img/'
      },
      {
        // Copiar toda la carpeta "public" (si es que la carpeta "fonts" e "img" están dentro)
        from: 'public/**/*',
        to: './assets/public/'
      }
    ]
  }
};
