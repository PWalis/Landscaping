import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = loadEnv("", process.cwd()).VITE_BASE_URL

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "localhost:3307",
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
