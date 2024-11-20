import Cookies from 'js-cookie'

/**
 * 用于存储和获取用户身份的 Token 的键名
 */
const TokenKey = 'vue_medical_system_token'

/**
 * 获取 Token
 * @returns {string | undefined} - 返回存储在 Cookie 中的 Token 值，如果不存在则返回 undefined
 */
export function getToken() {
  return Cookies.get(TokenKey)
}

/**
 * 设置 Token
 * @param {string} token - 要存储的 Token 值
 * @returns {Cookies.CookiesStatic} - 返回 js-cookie 的操作实例，用于链式调用
 */
export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

/**
 * 删除 Token
 * @returns {void} - 不返回任何值
 */
export function removeToken() {
  return Cookies.remove(TokenKey)
}
