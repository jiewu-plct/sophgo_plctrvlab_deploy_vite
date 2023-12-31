import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from './language/index.ts'

// createApp(App).use(router).mount('#app') 

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(i18n)
app.mount('#app')