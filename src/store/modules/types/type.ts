// 引入
import type { infoData } from '@/api/user/types'

// 定义小仓库数据类型
export interface UserState {
  token: string | null
  info: null | infoData
}

// route数据类型
import type { RouteRecordRaw } from 'vue-router'
export interface typeRoute {
  constantRouterMap: RouteRecordRaw[]
}
