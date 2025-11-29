import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 🌟 CORRECTED BASE PATH (changed 's' to 'a' in 'timalsina')
  base: "/sujan-timalaina-portfolio/", 
  plugins: [react()],
})