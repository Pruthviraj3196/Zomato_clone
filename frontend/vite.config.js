import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0',
    port: 10000,
    proxy:{
      '/api':{
        target:'https://festa-backend.onrender.com',
        changeOrigin:true,
        secure:false
      },
    },
  },
  plugins: [react()],
})
