# 项目名称

这是一个基于 Vue 3 和 Vite 的前端项目模板，旨在帮助开发者快速启动开发。

## 项目简介

该项目使用 Vue 3 的 Composition API 进行开发，集成了 Vite 作为构建工具。项目中包含了基本的开发环境配置和模拟后端接口的功能。

## 技术栈

- **Vue 3**: 使用 Composition API 进行组件开发。
- **Vite**: 作为快速的开发服务器和构建工具。
- **Mock.js**: 用于模拟后端接口，便于前端开发和测试。

## 项目功能

- **开发环境配置**: 提供了基本的开发环境配置，包括 ESLint 代码检查。
- **模拟接口**: 使用 Mock.js 模拟后端接口，支持在开发环境中进行数据请求。
- **热重载**: 使用 Vite 提供的热重载功能，提升开发效率。

## 安装与使用

### 环境要求

- Node.js 版本 >= 14.x
- npm 版本 >= 6.x

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

## 模拟接口使用

在开发环境中，项目会自动引入 `mock/index.js` 文件，使用 Mock.js 提供的模拟接口。你可以在 `mock/index.js` 中定义自己的接口和数据。

## 目录结构

```
├── src
│   ├── components    # 组件
│   ├── views         # 视图
│   ├── router        # 路由配置
│   ├── store         # 状态管理
│   ├── mock          # 模拟数据
│   └── main.js       # 项目入口文件
└── README.md         # 项目说明文件
```

## 贡献

欢迎对本项目进行贡献！请提交 Pull Request 或 Issue。

## 许可证

本项目采用 MIT 许可证。
