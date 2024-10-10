import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 配置跨域
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0", //配置NetWor地址
    open: false,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://117.33.255.178:8082/zhifou-study", //后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
