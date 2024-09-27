/*
 * @description: 
 * @param: params
 * @return: 
 */
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../view/Login.vue')
  },
  {
    path: "/home",
    name: "主页",
    meta: {
      title: "主页"
    },
    component: () => import('../view/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        meta: {
          title: '首页'
        },
        component: () => import('../view/Welcome.vue')
      },
      {
        path: '/user/list',
        meta: {
          title: '用户管理'
        },
        component: () => import('../view/user/Index.vue'),
      },
      {
        path: '/user/detail',
        meta: {
          title: '用户详情'
        },
        component: () => import('../view/user/Detail.vue'),
      },
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // 修改页面titie
  if (to.meta.title) {
    document.title = "酷我锦后台管理系统" + to.meta.title;
    next();
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
