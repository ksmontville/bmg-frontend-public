import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

// require = require('esm')(module);
// const { routes } = require('./src/routes.js');
//
// module.exports = {
//     pluginOptions: {
//         sitemap: {
//             baseURL: 'https://black-moon-games.com',
//             routes,
//         }
//     }
// }