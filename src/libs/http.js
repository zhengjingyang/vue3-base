// src/libs/http.js
import axios from 'axios'
import { useAuthStore } from '@/stores/index.js'

class AxiosService {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL: baseURL, // 使用传入的 baseURL
      timeout: 10000, // 请求超时时间
    })

    this.whitelist = ['/login', '/signup']

    this.setupInterceptors()
  }

  setupInterceptors() {
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 检查请求 URL 是否在白名单中
        if (!this.whitelist.includes(config.url)) {
          const token = useAuthStore().token
          if (token) {
            // 将 token 添加到请求头
            config.headers.Authorization = `Bearer ${token}`
          } else {
            // 如果没有 token，可以选择抛出错误或进行其他处理
            console.warn('No token found, redirecting to login...')
            // 例如：可以重定向到登录页面
            window.location.href = '/login'
          }
        }
        return config
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error)
      },
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // 对响应数据做点什么
        let data = response.data
        if (data.code == 401) {
          useAuthStore().setToken(null)
          window.location.href = '/login'
        } else if (data.code == 200) {
          return data.data
        } else {
          return data
        }
      },
      (error) => {
        // 对响应错误做点什么
        return Promise.reject(error)
      },
    )
  }

  getInstance() {
    return this.instance
  }
}

export const http = new AxiosService(import.meta.env.VITE_API_BASE_URL).getInstance()
export const mockHttp = new AxiosService('/mockApi').getInstance()
