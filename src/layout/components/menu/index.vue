<template>
  <el-scrollbar class="scrollbar">
    <el-menu class="menu-container" router :default-active="$route.path">
      <MenuItem :menuList="filteredRouterMap"></MenuItem>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// 引入路由对象
import { useRoute } from 'vue-router'
// 获取路由对象
const $route = useRoute()

// 从仓库引入静态路由
import useRoutesStore from '@/store/modules/routes'
let routesStore = useRoutesStore()
let constantRouterMap = routesStore.constantRouterMap

// 引入menuItem组件
import MenuItem from './component/menuItem/index.vue'

// 过滤constantRouterMap
const filteredRouterMap = computed(() => {
  return constantRouterMap.filter(
    (item) => item.children && item.children.length > 0,
  )[0].children
})
</script>

<style scoped lang="scss">
// 导入全局样式
@use '@/styles/variable.scss' as variable;

// 滚动条样式
.scrollbar {
  // 滚动条高度为视图高减去logo组件的高度
  height: calc(100vh - #{variable.$logo-height});
  // menu容器
  .menu-container {
    border: 0;
    background-color: variable.$el-aside-background;
  }
}
</style>
