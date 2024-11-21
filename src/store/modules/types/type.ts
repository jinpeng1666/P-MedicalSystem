// 定义小仓库数据类型
export interface UserState {
  token: string | null
  userName: string
  avatar: string
}

// route数据类型
import type { RouteRecordRaw } from 'vue-router'
export interface typeRoute {
  constantRouterMap: RouteRecordRaw[]
}
