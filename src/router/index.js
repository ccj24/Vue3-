import { createRouter, createWebHashHistory } from "vue-router";

const routes = [];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // 修改页面titie
  if (to.meta.title) {
    document.title = "酷我锦后台管理系统" + to.meta.title;
  }
  // 放行登录页
  if (to.path === "login") {
    return next();
  }
  //   获取token
  const token = sessionStorage.getItem("token");
  if (!token) {
    return next("/login");
  } else {
    next();
  }
  return next();
});
// 路由导出
export default router;
