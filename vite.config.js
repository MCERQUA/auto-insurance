import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        events: resolve(__dirname, 'events.html'),
        quote: resolve(__dirname, 'quote.html'),
        claims: resolve(__dirname, 'claims.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
