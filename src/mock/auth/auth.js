import Mock from 'mockjs'

// 模拟登录接口
Mock.mock('/mockApi/login', 'post', (options) => {
  const { username, password } = JSON.parse(options.body)
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: '登录成功',
      data: {
        token: Mock.Random.guid(),
      },
    }
  } else {
    return {
      code: 400,
      message: '用户名或密码错误',
    }
  }
})
