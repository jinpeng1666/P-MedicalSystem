<template>
  <template v-for="(item, index) in menuList" :key="index">
    <!-- 没有子路由 -->
    <el-menu-item v-if="item.children.length < 1" :index="item.path">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>
        {{ item.meta.title }}
      </template>
    </el-menu-item>
    <!-- 有多个子路由 -->
    <el-sub-menu v-if="item.children.length >= 1" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem :menuList="item.children"></MenuItem>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
  name: 'MenuItem',
}
</script>

<style scoped lang="scss">
// 导入全局样式
@use '@/styles/variable.scss' as variable;
//折叠sub-menu的title样式
::v-deep(.el-sub-menu__title) {
  font-size: 15px;
  background-color: variable.$el-aside-background;
  &:hover {
    background-color: #ecf5ff; // 鼠标悬停背景颜色
  }
}
</style>
