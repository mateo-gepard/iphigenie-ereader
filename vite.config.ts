import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000, // Erhöhe das Limit auf 1MB
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks für bessere Caching-Performance
          'react-vendor': ['react', 'react-dom'],
          'openai-vendor': ['openai'],
          // Große Daten-Files separat
          'text-data': [
            './src/data/IphigenieText1',
            './src/data/IphigenieText2', 
            './src/data/IphigenieText3',
            './src/data/IphigenieText4',
            './src/data/IphigenieText5'
          ]
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true
  }
})
