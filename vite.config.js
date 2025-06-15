import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        gallery: 'gallery.html',
        uwaziRefactor: 'projects/uwazi-ui-refactor.html',
        uwaziMl: 'projects/uwazi-ml.html',
        uwaziPreserve: 'projects/uwazi-preserve.html',
        ktnRyms: 'projects/ktn-ryms.html',
      },
    },
  },
});
