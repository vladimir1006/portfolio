import { fileURLToPath, URL } from 'node:url'
import {viteStaticCopy} from "vite-plugin-static-copy";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: "src/assets/",
    //       dest: "" // Copie directement dans `dist/`
    //     }
    //   ]
    // })
  ],
  base: '/portfolio/',
  //assetsInclude: ['**/*.html'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
