<template>
  <el-row class="logo" v-if="!settingStore.isFold">
    <el-col :span="8" class="logo-container">
      <!-- logo -->
      <svg class="logo-svg">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </el-col>
    <el-col :span="16" class="title-container">
      <!-- title -->
      <span>{{ title }}</span>
    </el-col>
  </el-row>
  <!-- 折叠展示 -->
  <el-row class="logo" justify="center" v-else>
    <el-col :span="18" class="logo-container">
      <!-- logo -->
      <svg class="logo-svg">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let title = ref(import.meta.env.VITE_APP_TITLE)

// 引入setting仓库
import useSettingStore from '@/store/modules/setting'
const settingStore = useSettingStore()
</script>

<style scoped lang="scss">
// 导入全局样式
@use '@/styles/variable.scss' as variable;
// logo所在的el-col的span等于($logo-height/$el-aside-width) * 24

.logo {
  height: variable.$logo-height;
  // logo容器
  .logo-container {
    height: 100%;
    width: 64px;
    // 图标容器样式
    .logo-svg {
      width: variable.$logo-height;
      height: variable.$logo-height;
    }
  }
  // title容器
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    // title样式
    span {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
