import Mock from 'mockjs'

// 模拟登录接口
Mock.mock('/api/login', 'post', (options) => {
  const { username, password } = JSON.parse(options.body)
  if (username === 'admin' && password === '123456') {
    return {
      status: 'success',
      message: '登录成功',
      token: Mock.Random.guid(),
    }
  } else {
    return {
      status: 'error',
      message: '用户名或密码错误',
    }
  }
})
