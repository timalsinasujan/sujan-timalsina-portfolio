import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // THIS IS THE CRITICAL LINE: It MUST match your repository name
  base: '/sujan-timalsina-portfolio/', 
  plugins: [react()],
})