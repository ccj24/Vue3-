import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index.js";

// 创建应用实例
const app = createApp(App);
//配置使用Element plus
app.use(ElementPlus);
app.use(router);
// 挂载应用
app.mount("#app", true);
