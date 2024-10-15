import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createAlias } from "./build/alias.ts";
import eslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/
const __dirname = process.cwd();
console.log(path.resolve(__dirname, "/src"));
export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: createAlias([
      ["@/", "src/"],
      ["#/", "types/"],
    ]),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // 自动导入全局 SCSS 文件
      },
    },
  },
});
