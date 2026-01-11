import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 85, // balanced quality for portfolio images
        progressive: true
      },
      jpeg: {
        quality: 85,
        progressive: true
      },
      png: {
        quality: 85, // 0–100
        compressionLevel: 9 // 0–9 (higher = more compressed)
      },
      webp: {
        quality: 80
      },
      avif: {
        quality: 65
      },
      // optional: resize big images (good for web perf)
      resize: {
        width: 1920,
        withoutEnlargement: true
      },
      // svgo is built in:
      svg: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          }
        ]
      }
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ],
  optimizeDeps: {
    include: ['three']
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        garden: 'garden.html',
        styleGuide: 'style-guide.html',
        userInterfaces: 'user-interfaces.html',
        graphicDesign: 'graphic-design.html',
        uwaziRefactor: 'projects/uwazi-ui-refactor.html',
        uwaziMl: 'projects/uwazi-ml.html',
        uwaziPreserve: 'projects/uwazi-preserve.html',
        ktnRyms: 'projects/ktn-ryms.html'
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          three: ['three']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
