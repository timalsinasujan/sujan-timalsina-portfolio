// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // CRITICAL FIX: Base path must match your repository name
  base: '/sujan-timalsina-portfolio/', 
  plugins: [react()],
})