<template>
  <!-- 总容器 -->
  <el-container class="total-container">
    <!-- 左侧导航栏 -->
    <el-aside class="el-aside">
      <Logo></Logo>
      <Menu></Menu>
    </el-aside>
    <!-- 右侧容器 -->
    <el-container>
      <!-- 右侧容器面包屑 -->
      <el-header>头部</el-header>
      <!-- 右侧容器内容展示区 -->
      <el-main>
        <!-- 二级路由展示 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// 引入组件
import Logo from './components/logo/index.vue'
import Menu from './components/menu/index.vue'
</script>

<style scoped lang="scss">
// 导入全局样式
@use '@/styles/variable.scss' as variable;
// 总容器
.total-container {
  height: 100vh;
  min-height: variable.$container-min-height;
  // 左侧导航栏
  .el-aside {
    width: variable.$el-aside-width;
    background-color: variable.$el-aside-background;
  }
}
</style>
