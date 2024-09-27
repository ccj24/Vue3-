import router from "../../router/index.js";
// 新建全局函数
// 路由跳转
const changeView = (url, queryParams) => {
  router.push({
    path: url,
    query: queryParams,
  });
};
export default {
  changeView,
};
