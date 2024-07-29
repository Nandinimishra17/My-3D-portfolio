import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html',
      output: {
        // Configure manualChunks to split chunks
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example: Extract React and ReactDOM into a vendor chunk
          // Add more chunks based on your project's needs
        },
        chunkSizeWarningLimit: 500 // Adjust this if you want to change the warning threshold
      }
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: '/My-3D-portfolio/', // Ensure this matches the path where your site is deployed
});


