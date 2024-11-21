<template>
  <template v-for="(item, index) in menuList" :key="index">
    <!-- 没有子路由 -->
    <el-menu-item v-if="item.children.length < 1" :index="item.path">
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
    <!-- 有多个子路由 -->
    <el-sub-menu v-if="item.children.length >= 1" :index="item.path">
      <template #title>{{ item.meta.title }}</template>
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

<style scoped></style>
