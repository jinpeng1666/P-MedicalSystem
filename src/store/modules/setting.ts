/**
 * layout组件相关配置
 */
import { defineStore } from 'pinia'

const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      // 菜单折叠标记
      isFold: false,
    }
  },
})

export default useSettingStore
