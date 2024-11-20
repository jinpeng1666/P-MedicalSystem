<template>
  <el-scrollbar class="scrollbar">
    <el-menu class="menu-container">
      <el-menu-item index="1">123</el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts"></script>

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
