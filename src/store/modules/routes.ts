import { defineStore } from 'pinia'

// 引入数据类型
import type { typeRoute } from './types/type.ts'

// 引入routes
import { constantRouterMap, asyncRouterMap } from '@/router/routes'

// 引入user.ts
import useUserStore from '@/store/modules/user.js'

// 引入permission.ts
import { hasPermission } from '@/utils/permission.js'

const useRoutesStore = defineStore('routes', {
  state: (): typeRoute => {
    return {
      constantRouterMap,
      asyncRouterMap,
    }
  },
  actions: {},
  getters: {
    addRoutes: (state) => {
      const userStore = useUserStore()
      const roles = userStore.info?.roles // 获取用户角色
      const routes = state.asyncRouterMap // 获取动态路由数组
      return routes.filter((route) => hasPermission(roles, route))
    },
  },
})

export default useRoutesStore
