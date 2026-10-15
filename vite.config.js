import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// aipply-ahn.github.io 는 Organization 루트 사이트이므로 base 는 '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
