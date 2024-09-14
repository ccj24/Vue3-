import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const instance = axios.create({
  // 接口
  baseURL: "/api",
  // 超时时间
  timeout: 50000,
});

// 请求拦截
instance.interceptors.request.use((config) => {
  let token = sessionStorage.getItem("token");
  if (token) {
    config.headers["token"] = token; //在请求头加上token
  }
  return config;
}, (error = {}));
