import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'
// 样式，按需引入element相关组件
import 'element-plus/dist/index.css'
import { ElButton } from 'element-plus'
// 引入pinia
import pinia from './store'

const app = createApp(App)

// 使用element相关组件
app.use(ElButton)
//使用pinia
app.use(pinia)

app.mount('#app')
