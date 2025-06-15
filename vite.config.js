import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        gallery: 'gallery.html',
        uwazi: 'projects/uwazi-redesign.html',
        ml: 'projects/ml-extraction.html',
        preserve: 'projects/preserve.html',
        railcar: 'projects/ktn-ryms.html',
      },
    },
  },
});
