// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Esto reemplaza __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'atom': path.resolve(__dirname, 'src/components/atoms'),
      'mol': path.resolve(__dirname, 'src/components/molecules'),
      'org': path.resolve(__dirname, 'src/components/organisms'),
      'tmpl': path.resolve(__dirname, 'src/components/templates'),
      'page': path.resolve(__dirname, 'src/components/pages'),
      'slice': path.resolve(__dirname, 'src/features/slices')
    }
  }
})

