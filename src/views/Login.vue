<template>
  <div class="login-container">
    <div class="login">
      <h1>登录</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">用户名:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">密码:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/login'
import { useAuthStore } from '@/stores'

export default {
  name: 'Login',
  setup() {
    const username = ref('')
    const password = ref('')
    const router = useRouter()

    const handleLogin = async () => {
      try {
        const response = await login({
          username: username.value,
          password: password.value,
        })
        console.log(response, 'response')

        // 假设响应中包含 token
        const token = response.token
        useAuthStore().setToken(token)
        router.push('/')
      } catch (error) {
        console.error('登录失败:', error)
        alert('登录失败，请检查用户名和密码。')
      }
    }

    return {
      username,
      password,
      handleLogin,
    }
  },
}
</script>

<style scoped lang="less">
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  max-width: 300px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login h1 {
  text-align: center;
}
.login div {
  margin-bottom: 1em;
}
.login label {
  display: block;
  margin-bottom: 0.5em;
}
.login input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}
.login button {
  width: 100%;
  padding: 0.7em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login button:hover {
  background-color: #0056b3;
}
</style>
