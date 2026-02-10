import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    laravel({
      input: ['resources/js/app.jsx', 'resources/css/app.css'],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    middlewareMode: false,
    hmr: {
      host: '127.0.0.1',
      port: 5173,
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
  },
})
