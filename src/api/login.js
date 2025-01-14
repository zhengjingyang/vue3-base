import http from '@/libs/http'

export const login = (data) => {
  return http.post('/api/login', data)
}

