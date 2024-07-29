import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html',
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: '/My-3D-portfolio/', // Ensure this matches the path where your site is deployed
});

