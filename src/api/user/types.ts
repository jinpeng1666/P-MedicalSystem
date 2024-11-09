interface dataType {
  token?: string
  message?: string
}

interface userInfo {
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

interface user {
  checkUser: userInfo
}

// 登录接口需要携带参数的ts类型
export interface loginForm {
  username: string
  password: string
}

// 登录接口返回的数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

// 获取用户信息接口返回的数据类型
export interface userResponseData {
  code: number
  data: user
}
