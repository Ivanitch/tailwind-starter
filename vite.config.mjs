import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs',  // ссылка на CommonJS PostCSS конфиг
  },
  server: {
    open: true, // чтобы браузер открывался автоматически
  },
  build: {
    outDir: 'dist',
  },
});
