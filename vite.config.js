import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',  // Backend server address
        changeOrigin: true,  // Adjusts the origin of the request to match the target
        rewrite: (path) => path.replace(/^\/api/, ''),  // Removes "/api" prefix before forwarding to backend
      },
    },
  },
  plugins: [react()],
})
