import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'



// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
    },
  },
  server: {
    port: 8080
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      /**
       * Data that needs to be injected into the index.html ejs template
       */
      inject: {
        data: {
          title: 'app',
          injectScript: `<script src="./inject.js"></script>`,
        },
      },
    }),
  ],

  css: {
    modules: {
      //generateScopedName: "[name]__[local]___[hash:base64:5]",
      generateScopedName: "[hash:base64:3]",
    }
  },
})
