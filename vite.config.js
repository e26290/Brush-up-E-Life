import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Brush-up-E-Life/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true,
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }), //自動載入
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})