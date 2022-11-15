import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },

  plugins: [
    svelte(),
  ],

  css: {
    modules: {
      //generateScopedName: "[name]__[local]___[hash:base64:5]",
      generateScopedName: "[hash:base64:3]",
    }
  },
})
