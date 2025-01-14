import { mockHttp } from '@/libs/http'

export const login = (data) => {
  return mockHttp.post('/login', data)
}

