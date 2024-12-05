// 登录请求返回的数据
export interface loginData {
  token: string
}

// 获取用户信息请求返回的数据
export interface infoData {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

// 登录请求体
export interface loginForm {
  username: string
  password: string
}

// 所有请求返回的数据
export interface responseResult {
  code: number
  message: string
  data: loginData | infoData | object
}
