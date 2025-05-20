import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// Автоматически собираем все HTML-файлы в корне проекта
const input = {}
fs.readdirSync('.')
  .filter(file => file.endsWith('.html'))
  .forEach(file => {
    input[file.replace('.html', '')] = resolve(__dirname, file)
  })

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input
    }
  }
})
