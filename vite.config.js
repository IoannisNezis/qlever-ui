import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'qlever_ui/main.ts',
      // /index.htmlutput: {
      //   entryFileNames: 'editor.js',
      // },
    },
    outDir: './backend/static/editor/',
    assetsInlineLimit: 0,

  },
  assetsInclude: ["**/*yaml"],
  worker: {
    format: "es",
    plugins: () => [
      wasm(),
    ],
  }
})

