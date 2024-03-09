import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
    test: {
      // <--- Add this object
      globals: true,
      environment: "jsdom",
    },
  base: process.env.NODE_ENV === 'production' ? '/CryptoCasino/' : '/',
})
