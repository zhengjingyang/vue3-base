// mock/index.js
import Mock from 'mockjs'
import './auth/auth'  // 引入auth模块

// 模拟一个用户信息的接口
Mock.mock('/api/user', 'get', {
  name: '@name',
  'age|18-30': 1,
  'gender|1': ['male', 'female'],
})

// 其他模拟接口
// Mock.mock('/api/other', 'get', { ... });
