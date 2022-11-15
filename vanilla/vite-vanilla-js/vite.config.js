import { defineConfig } from 'vite'



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },

  css: {
    modules: {
      //generateScopedName: "[name]__[local]___[hash:base64:5]",
      generateScopedName: "[hash:base64:3]",
    }
  },
})
