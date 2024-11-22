import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'
// 样式，按需引入element相关组件
import 'element-plus/dist/index.css'
import { ElButton } from 'element-plus'
// 引入pinia
import pinia from './store'
// 引入路由
import router from './router'
// 配置svg
import 'virtual:svg-icons-register'
// 配置Icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 使用element相关组件
app.use(ElButton)
//使用pinia
app.use(pinia)
//使用router
app.use(router)
// 配置Icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
