import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslintPlugin from 'vite-plugin-eslint'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), envCompatible()],
  base: "/CryptoCasino",
  css: {
    // Example if you want to use preprocessors:
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables.scss";'
      }
    }
  }
})
