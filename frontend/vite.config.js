import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // So it listens from inside the Docker container
    port: 5000,           // Force port 5000
    strictPort: true,     // Crash if port 5000 is in use
    watch: {
      usePolling: true,   // Important for Docker volume changes to be picked up
    },
  },
})
