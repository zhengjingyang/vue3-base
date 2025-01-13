import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: sessionStorage.getItem('token') || '',
  }),
  actions: {
    setToken(newToken) {
      this.token = newToken
      sessionStorage.setItem('token', newToken)
    },
    clearToken() {
      this.token = ''
      sessionStorage.removeItem('token')
    },
  },
})
