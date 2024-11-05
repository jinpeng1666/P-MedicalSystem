import Cookies from 'js-cookie'

const TokenKey = 'vue_medical_system_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: any) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
