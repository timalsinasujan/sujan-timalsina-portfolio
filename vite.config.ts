import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 🌟 CRITICAL FIX FOR CUSTOM DOMAINS: Use absolute root path
  base: '/', 
  plugins: [react()],
})