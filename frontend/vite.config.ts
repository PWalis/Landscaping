import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = process.env.REACT_APP_BASE_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: BASE_URL,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
