<template>
  <el-row class="tabbar" justify="space-between">
    <!-- 左侧 -->
    <el-col :span="10" class="tabbar_left">
      <!-- 图标 -->
      <el-icon :size="20" style="margin-right: 10px" @click="changeIcon">
        <component :is="settingStore.isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
      <!-- 面包屑 -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="10" class="tabbar_right">
      <!-- 按钮 -->
      <el-button type="primary" icon="Refresh" circle />
      <el-button type="primary" icon="Setting" circle />
      <!-- 头像 -->
      <el-avatar
        class="avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
// 引入setting仓库
import useSettingStore from '@/store/modules/setting'
const settingStore = useSettingStore()

const changeIcon = () => {
  settingStore.isFold = !settingStore.isFold
}
</script>

<style scoped lang="scss">
// 导入全局样式
@use '@/styles/variable.scss' as variable;
.tabbar {
  height: 100%;
  // 左侧
  .tabbar_left {
    display: flex;
    align-items: center;
  }
  // 右侧
  .tabbar_right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // 按钮样式
    .el-button {
      background-color: #fca311;
      border-color: #fca311;
      height: variable.$tabbar-button-size;
      width: variable.$tabbar-button-size;
      ::v-deep .el-icon {
        font-size: variable.$tabbar-button-icon-size;
      }
    }
    // 头像
    .avatar {
      margin-left: 10px;
    }
  }
}
</style>
