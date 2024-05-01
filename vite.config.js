import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  
  // The test object should be nested inside defineConfig
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/containers/setup.js',
  },
  build: {
    rollupOptions: {
      external: ['@mui/styles']
    }
  },

  base: process.env.NODE_ENV === 'production' ? '/CryptoCasino/' : '/',
})
