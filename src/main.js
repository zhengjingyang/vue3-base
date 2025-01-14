import './assets/main.css'
if (process.env.NODE_ENV === 'development') {
  import('./mock')
}

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
