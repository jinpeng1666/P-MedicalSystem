/**
 * 校验用户是否具有访问这个路由的权限
 * @param roles 用户当前的所有身份
 * @param route 某一个路由
 * @returns boolean
 */
export function hasPermission(roles: any, route: any) {
  if (!Array.isArray(roles)) {
    console.error('roles应该是一个数组')
    return false // 如果roles不是数组，直接返回false
  }
  return roles.some((role: any) => {
    return route.meta.role.includes(role)
  })
}
