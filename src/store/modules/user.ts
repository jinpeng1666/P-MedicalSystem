import { defineStore } from 'pinia'
// 导入登陆api
import { reqLogin, reqUserInfo } from '@/api/user'
// 引入数据类型
import type {
  loginForm,
  responseResult,
  loginData,
  infoData,
} from '@/api/user/types'
import type { UserState } from './types/type'
// 导入js-cookie
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: getToken() as string,
      info: null,
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: responseResult = await reqLogin(data)
      if (result.code == 200) {
        this.token = (result.data as loginData).token
        setToken((result.data as loginData).token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    // 在有token的情况下，获取用户信息（用户名、头像和权限等）
    async userMessage() {
      const result = await reqUserInfo()
      this.info = result.data as infoData
    },
    // 退出登录，删除信息
    logout() {
      this.token = ''
      this.info = null
      removeToken()
    },
  },
  getters: {},
})

export default useUserStore
