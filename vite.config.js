import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import viteCompression from 'vite-plugin-compression';

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
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  optimizeDeps: {
    include: ['three'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        garden: 'garden.html',
        styleGuide: 'style-guide.html',
        uiBites: 'user-interfaces.html',
        graphicDesign: 'graphic-design.html',
        uwaziRefactor: 'projects/uwazi-ui-refactor.html',
        uwaziMl: 'projects/uwazi-ml.html',
        uwaziPreserve: 'projects/uwazi-preserve.html',
        ktnRyms: 'projects/ktn-ryms.html',
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          three: ['three'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
