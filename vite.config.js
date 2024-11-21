import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: ' https://podclub-backend-1.onrender.com',  
        changeOrigin: true,  
        rewrite: (path) => path.replace(/^\/api/, ''),  
      },
    },
  },
  plugins: [react()],
})
