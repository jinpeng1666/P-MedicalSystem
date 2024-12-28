/**
 * layout组件相关配置
 */
import { defineStore } from 'pinia'

const useSettingStore = defineStore('Setting', {
  state: () => {
    return {
      // 菜单折叠标记
      isFold: false,
      // 刷新按钮
      refresh: false,
    }
  },
})

export default useSettingStore
