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

// 响应拦截
instance.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error && error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          break;
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        case 408:
          break;
        case 500:
          break;
        case 501:
          break;
        case 502:
          break;
        case 503:
          break;
        case 504:
          ElMessage.error("网络超时")
          break;
        case 505:
          ElMessage.error("HTTP版本不支持请求")
          break;
        default:
          ElMessage.error("请求失败")
          break;
      }
    } else {
      if (JSON.stringify(error).includes("timeout")) {
        ElMessage.error("服务器响应超时，请刷新页面")
      }
      ElMessage.error("连接服务器失败")
    }
    return Promise.reject(error)
  }
);

// 导出axios实例
export default instance;
