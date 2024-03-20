import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    outDir: '../docs',
  },
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 8080,
  },
})
