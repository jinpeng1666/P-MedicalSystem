/**
 * 对 axios 进行二次封装
 * 主要目的是配置基础路径、统一处理请求拦截、响应拦截等功能。
 */

import axios from 'axios'

// 引入 Element Plus 的消息提示组件，用于显示错误信息
import { ElMessage } from 'element-plus'

// 引入 user 仓库，用于获取用户的 token 信息
import useUserStore from '@/store/modules/user'

// 创建 axios 实例，配置基础路径和超时时间
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  const userStore = useUserStore()
  // 判断仓库是否有token，有则配置每个请求带有token
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(
  // 响应成功回调
  (response) => {
    // 用于处理（简化数据）请求返回的数据
    return response.data
  },
  // 响应失败回调
  (error) => {
    ElMessage({
      type: 'error',
      message: '请求错误',
    })
    return Promise.reject(error)
  },
)

export default request
