import { defineStore } from 'pinia'

// 引入数据类型
import type { typeRoute } from './types/type.ts'

// 引入routes
import { constantRouterMap } from '@/router/routes'

const useRoutesStore = defineStore('routes', {
  state: (): typeRoute => {
    return {
      constantRouterMap,
    }
  },
  actions: {},
  getters: {},
})

export default useRoutesStore
