// my-portfolio/vite.config.js 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),

      '@app': path.resolve(__dirname, './src/app'),

      '@components': path.resolve(__dirname, './src/components'),
        '@layout': path.resolve(__dirname, './src/components/layout'),
        '@sections': path.resolve(__dirname, './src/components/sections'),
          '@about': path.resolve(__dirname, './src/components/sections/about'),
        '@ui': path.resolve(__dirname, './src/components/ui'),

      '@data': path.resolve(__dirname, './src/data'),

      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
})

