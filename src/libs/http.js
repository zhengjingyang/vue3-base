// src/http.js
import axios from 'axios'
import { useAuthStore } from '@/stores/index.js'

// 动态设置 baseURL
const getBaseURL = () => {
  // 你可以根据环境变量或其他逻辑来设置不同的 baseURL
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.production.com'
  } else {
    return '/'
  }
}

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: getBaseURL(), // 动态获取 baseURL
  timeout: 10000, // 请求超时时间
  headers: { 'X-Custom-Header': 'foobar' },
})

// 配置白名单
const whitelist = ['/login', '/signup']

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 检查请求 URL 是否在白名单中
    if (!whitelist.includes(config.url)) {
      // 获取 token（假设 token 存储在 localStorage 中）
      const token = useAuthStore().token
      if (token) {
        // 将 token 添加到请求头
        config.headers.Authorization = `Bearer ${token}`
      } else {
        // 如果没有 token，可以选择抛出错误或进行其他处理
        console.warn('No token found, redirecting to login...')
        // 例如：可以重定向到登录页面
        // window.location.href = '/login'
      }
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default instance
