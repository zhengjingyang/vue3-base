import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'
import { useAuthStore } from '@/stores/index.js'
const router = createRouter({
  // 创建路由
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 白名单
  const whitelist = ['/login', '/', '/about']

  // 检查目标路由是否在白名单中
  if (whitelist.includes(to.path)) {
    return next()
  }

  // 获取 token
  const token = useAuthStore().token

  if (token) {
    // 如果有 token，允许进入目标路由
    next()
  } else {
    // 如果没有 token，重定向到登录页面
    next('/login')
  }
})

export default router
