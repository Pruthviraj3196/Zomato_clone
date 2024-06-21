import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0',
    port: 10000,
    proxy:{
      '/api':{
        target:'https://zomato-clone-n3s4.onrender.com',
        changeOrigin:true,
        secure:false
      },
    },
  },
  plugins: [react()],
})
