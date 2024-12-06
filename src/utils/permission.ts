/**
 * 校验用户是否具有访问这个路由的权限
 * 当route.meta为空，说明是404页面，直接返回true
 * @param roles 用户当前的所有身份
 * @param route 某一个路由
 * @returns boolean
 */
export function hasPermission(roles: any, route: any) {
  if (!route.meta) {
    return true
  }
  return roles.some((role: any) => {
    return route.meta.role.includes(role)
  })
}
