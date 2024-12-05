import request from '@/utils/request'

import type { loginForm, responseResult } from './types'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<loginForm, responseResult>(API.LOGIN_URL, data)

// 获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, responseResult>(API.USERINFO_URL)
