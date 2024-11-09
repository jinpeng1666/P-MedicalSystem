import { defineStore } from 'pinia'
// 导入登陆api
import { reqLogin, reqUserInfo } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/types'
import type { UserState } from './types/type'
// 导入js-cookie
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: getToken() as string,
      userName: '',
      avatar: '',
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        setToken(result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    // 在有token的情况下，获取userName和avatar
    async userMessage() {
      const result = await reqUserInfo()
      this.avatar = result.data.checkUser.avatar
      this.userName = result.data.checkUser.username
    },
    // 退出登录，删除信息
    logout() {
      this.token = ''
      this.userName = ''
      this.avatar = ''
      removeToken()
    },
  },
  getters: {},
})

export default useUserStore
