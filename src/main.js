import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index.js";
import * as Icons from "@element-plus/icons-vue"; //引进icon图标
import locale from "element-plus/es/locale/lang/zh-cn"; //将 Element plus 配置成中文的：
import commonJs from "./assets/js/common.js";

// 创建应用实例
const app = createApp(App);
// 引进Icon图库
for (let i in Icons) {
  app.component(i, Icons[i]);
}
//配置使用Element plus
app.use(router).use(ElementPlus, { locale });
app.config.globalProperties.$commonJs = commonJs; //配置全局函数
// 挂载应用
app.mount("#app");
