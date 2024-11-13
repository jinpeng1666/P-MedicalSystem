<template>
  <el-row class="login_container">
    <!-- 左侧图片 -->
    <el-col :md="12" :sm="8" :xs="0" class="login_container_left"></el-col>
    <!-- 右侧表单 -->
    <el-col :md="12" :sm="16" :xs="24" class="login_container_right">
      <el-form ref="form" class="form" :rules="loginRules" :model="formData">
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="formData.username"
            placeholder="请输入账号"
            @keydown.enter="login"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            show-password
            @keydown.enter="login"
          />
        </el-form-item>
        <el-form-item>
          <div style="margin: 0 auto">
            <el-button round size="large" @click="login">登录</el-button>
            <el-button round size="large">注册</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
// 引入获取当前时间的函数
import { getTime } from '@/utils/time'

// 表单数据
let formData = reactive({
  username: '',
  password: '',
})
// 表单输入规则
let loginRules = {
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 16,
      message: '密码长度在6-16位之间',
      trigger: 'blur',
    },
  ],
}

// 获取表单对象
const form = ref()
// 引入仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
// 获取路由器
let $router = useRouter()
// 登录按钮回调
let login = () => {
  form.value.validate(async (isOK: boolean) => {
    if (isOK) {
      try {
        await userStore.userLogin(formData)
        $router.push('/')
        // 登录成功提示消息
        ElNotification({
          type: 'success',
          message: '欢迎回来',
          title: `HI,${getTime()}好`,
        })
      } catch (error) {
        // 登录失败提示消息
        ElNotification({
          type: 'error',
          message: (error as Error).message,
        })
      }
    }
  })
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  .login_container_left {
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    background-position: center;
  }
}
.login_container_right {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

// 表单样式
.form {
  width: 492px;
}
</style>
