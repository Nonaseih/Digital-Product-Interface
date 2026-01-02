/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 02/01/2026 - 00:53:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/01/2026
    * - Author          : fortu
    * - Modification    : 
**/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Digital-Product-Interface/',
})
