import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import pwaOptions from './pwa-options'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8081'
    }
  },
  plugins: [vue(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    PACKAGE_NAME: JSON.stringify(process.env.npm_package_name)
  }
})
