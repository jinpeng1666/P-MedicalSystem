# 1-项目初始化

## 1-1搭建Vite项目

> 参考：[开始 | Vite 官方中文文档](https://vitejs.cn/vite3-cn/guide/#scaffolding-your-first-vite-project)

> [!NOTE]
>
> 使用包管理工具创建项目之前，先将命令行的路径指向桌面
>
> 需要安装项目依赖项，项目才能正常启动

## 1-2配置ESLint

ESLint 是一个根据方案识别并报告 ECMAScript/JavaScript 代码问题的工具，其目的是使代码风格更加一致并避免错误

> 参考：[ESLint 入门 - ESLint - 插件化的 JavaScript 代码检查工具](https://zh-hans.eslint.org/docs/latest/use/getting-started)

**实例**

第一步：

使用该命令下载ESLint依赖项（ESLint 版本 9.0.0 开始，默认的配置文件）

```
pnpm i eslint@8.57.0
```

> [!TIP]
>
> 建议使用9.0.0版本以上，因为8.15.6不是长期支持的版本

第二步：

使用该命令安装并配置ESLint

```
npm init @eslint/config
```

> [!NOTE]
>
> 使用的是`npm`

![配置ESLint示例图1](https://raw.githubusercontent.com/jinpeng1666/picgo/master/Typora/Medical/配置ESLint示例图1.jpg)

运行完成之后，目录中会有`.eslintrc.json`文件

第三步：

将`.eslintrc.json`文件修改为如下内容

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  /* 指定如何解析语法 */
  "parser": "vue-eslint-parser",
  /* 继承已有的规则 */
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  /** 优先级低于 parse 的语法解析配置 */
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "parser": "@typescript-eslint/parser",
    "jsxPragma": "React",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["@typescript-eslint", "vue"],
  "rules": {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["warn", { "max": 1 }], // 不允许多个空行
    "no-unexpected-multiline": "error", // 禁止空余的多行
    "no-useless-escape": "off", // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
    "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
    "@typescript-eslint/semi": "off",

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
    "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用
    "vue/no-mutating-props": "off", // 不允许组件 prop的改变
    "vue/attribute-hyphenation": "off" // 对模板中的自定义组件强制执行属性命名样式
  }
}
```

第四步：

运行如下代码，下载相关插件

```
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

![配置ESLint示例图2](https://raw.githubusercontent.com/jinpeng1666/picgo/master/Typora/Medical/配置ESLint示例图2.jpg)

第五步：

在项目目录下，新建`.eslintignore`文件，添加如下内容

```
dist
node_modules
```

第六步：

在`package.json`文件的scripts配置项中添加如下代码

```
"scripts": {
    "lint": "eslint src",
    "fix": "eslint src --fix"
}
```

## 1-3配置prettier

多人协作的项目开发中，保持统一的代码风格

第一步：

下载插件

```
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

第二步：

新建`.prettierrc.json`文件，添加如下规则

```
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

第三步：

新建`.prettierignore`文件，添加如下内容

```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

## 1-4配置StyleLint

> 参考：[Home | Stylelint中文文档 | Stylelint中文网](https://stylelint.bootcss.com/)

第一步：

下载插件

```
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

第二步：

在项目目录下，新建一个`.stylelintrc.cjs`的配置文件，文件内容如下

```
// @see https://stylelint.bootcss.com/

module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}
```

第三步：

在项目目录下，新建一个`.stylelintignore`的忽略文件，文件内容如下

```
/node_modules/*
/dist/*
/html/*
/public/*
```

第四步：

在`package.json`文件的scripts配置项中添加如下代码

```
"scripts": {
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
  },
```

## 1-5配置husky

利用其在代码提交之前触发git hook(git在客户端的钩子)，然后执行`pnpm run format`来自动的格式化代码

第一步：

安装插件

```
pnpm install -D husky
```

第二步：

```
npx husky-init
```

执行完这段代码，会生成一个`.husky`的文件夹，该文件夹下有一个`pre-commit`文件，这个文件在执行commit的时候会自动执行

第三步：

在`pre-commit`文件修改为如下

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm run format

```

完成如上步骤，在进行commit操作时，会自动执行`pnpm run format`对代码进行格式化，之后再提交

## 1-6配置CommitLint

统一commit的信息

第一步：

安装插件

```
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

第二步：

在项目目录下，新建`commitlint.config.cjs`文件，文件内容如下

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
```

第三步：

在`package.json`文件的scripts配置项中添加如下代码

```
"scripts": {
  "commitlint": "commitlint --config commitlint.config.cjs -e -V"
},
```

第四步：

配置husky

```
npx husky add .husky/commit-msg
```

执行完这一步，会在`.husky`文件夹下面生成一个新的文件，名叫`commit-msg`

第五步：

在新的文件内容修改为如下

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm commitlint

```

完成上述步骤之后，在进行commit时，需要携带如下关键字

```
'feat',//新特性、新功能
'fix',//修改bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
```

## 1-7统一包管理工具

第一步：

在项目目录下，新建文件夹`scripts`，文件夹下新建文件`preinstall.js`文件，文件内容如下

```
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
    ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
```

第二步：

在`package.json`文件的scripts配置项中添加如下代码

```
"scripts": {
	"preinstall": "node ./scripts/preinstall.js"
}
```

## 1-8设置src文件夹别名

第一步：

将下列代码插入到Vite的配置文件`vite.config.ts`中：

```
// vite.config.ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 这里
export default defineConfig({
    plugins: [vue()],
    // 还有这里
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    }
})
```

第二步：

将下列代码插入到`tsconfig.json`文件中：

```
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
    "paths": { //路径映射，相对于baseUrl
      "@/*": ["src/*"]
    }
  }
}

```

> [!WARNING]
>
> tsconfig.json文件初始化的内容不一样了（原因未知），为了能让代码跑起来，只能使用之前的代码内容了

下图是5月份的![配置src文件别名示例图1](https://raw.githubusercontent.com/jinpeng1666/picgo/master/Typora/Medical/配置src文件别名示例图1.jpg)

下图是11月份的![配置src文件别名示例图2](https://raw.githubusercontent.com/jinpeng1666/picgo/master/Typora/Medical/配置src文件别名示例图2.jpg)

tsconfig.json改为如下内容，测试后，文件别名可以正常使用

![配置src文件别名示例图3](https://raw.githubusercontent.com/jinpeng1666/picgo/master/Typora/Medical/配置src文件别名示例图3.jpg)

但是存在main.ts文件使用不了@的情况，改为如下代码并且将`vite.config.ts`文件也修改

![配置scr别名示例图4](https://raw.githubusercontent.com/jinpeng1666/picgo/master/Typora/Medical/配置scr别名示例图4.jpg)

![设置src文件夹别名示例图5](https://raw.githubusercontent.com/jinpeng1666/picgo/master/Typora/Medical/设置src文件夹别名示例图5.jpg)

## 1-9集成scss

> [!NOTE]
>
> 在配置styleLint时，已经安装了sass和sass-loader，但我还是`pnpm i scss`

我们已经集成了sass，下面我们将引入一些全局样式

第一步：

在`src`文件夹，下面新建文件夹`styles`，新建`index.scss`、`reset.scss`和`variable.scss`文件

第二步：

将[scss-reset - npm (npmjs.com)](https://www.npmjs.com/package/scss-reset?activeTab=code)的文件内容引入到`reset.scss`文件里

第三步：

在`index.scss`文件中添加如下代码

```
@use './reset.scss'
```

第四步：

在`main.ts`文件中添加如下代码

```
// 引入全局样式
import '@/styles/index.scss'
```

## 1-10配置js-cookie

第一步：

```
pnpm i js-cookie
```

下载js-cookie

第二步：

在utils文件夹下新建一个文件`auth.ts`，用来封装读取、修改和删除用户的token，将token存储在cookie，新建的文件内容如下

```
import Cookies from 'js-cookie'

// 此处可自定义
const TokenKey = 'vue_medical_system_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: any) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

```

第三步

安装第三方的类型声明包来解决 TypeScript 找不到 `js-cookie` 的类型声明文件，因为 `js-cookie` 没有自带 `.d.ts` 类型文件的问题

```
pnpm add -D @types/js-cookie
```

## 1-11配置环境变量

第一步：

在项目目录下，创建文件`.env.development`，文件内容如下：

```
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'development'
VITE_APP_TITLE = '医疗系统'
VITE_APP_BASE_API = '/api'
```

第二步：

在项目目录下，创建文件`.env.production`，文件内容如下：

```
NODE_ENV = 'production'
VITE_APP_TITLE = '医疗系统'
VITE_APP_BASE_API = '/prod-api'
```

第三步：

在项目目录下，创建文件`.env.test`，文件内容如下：

```
# 变量必须以 VITE_ 为前缀才能暴露给外部读取
NODE_ENV = 'test'
VITE_APP_TITLE = '医疗系统'
VITE_APP_BASE_API = '/test-api'
```

第四步：

在`package.json`文件的scripts配置项中添加如下代码：

```
 "scripts": {
    "build:test": "vue-tsc && vite build --mode test",
    "build:pro": "vue-tsc && vite build --mode production",
  },
```

完成如上配置，即可通过import.meta.env来获取环境变量

## 1-12集成element-plus

> 参考：[安装 | Element Plus](https://element-plus.org/zh-CN/guide/installation.html)

第一步：

下载element-plus

```
pnpm install element-plus @element-plus/icons-vue
```

第二步：

按需引入element-plus相关的组件时，需要进行额外的插件

```
pnpm install -D unplugin-vue-components unplugin-auto-import
```

第三步：

将下列代码插入到Vite的配置文件`vite.config.ts`中

```
import { defineConfig } from 'vite'
// 这部分
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    // 这部分
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

## 1-13二次封装axios

> 参考：[默认配置 | Axios中文文档 | Axios中文网](https://www.axios-http.cn/docs/config_defaults)
>
> [拦截器 | Axios中文文档 | Axios中文网](https://www.axios-http.cn/docs/interceptors)

第一步：

安装axios

```
pnpm i axios
```

第二步：

在`src`文件夹下创建`utils`文件夹，再创建`request.ts`文件，文件内容如下：

```
// 对axios进行二次封装

import axios from 'axios'

// 引入element-plus的组件
import { ElMessage } from 'element-plus'

// 引入user仓库，判断是否包含token
// import useUserStore from '@/store/modules/user.ts'

const request = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // const userStore = useUserStore()
  // 判断仓库是否有token，有则配置每个请求带有token
  // if (userStore.token) {
  //   config.headers.token = userStore.token
  // }
  return config
})

// 响应拦截器
request.interceptors.response.use(
  // 响应成功回调
  (response) => {
    // 用于处理（简化数据）请求返回的数据
    return response.data
  },
  // 响应失败回调
  (error) => {
    ElMessage({
      type: 'error',
      message: '请求错误',
    })
    return Promise.reject(error)
  },
)

export default request

```

## 1-14集成pinia

> 参考：[开始 | Pinia](https://pinia.vuejs.org/zh/getting-started.html)

第一步：

安装pinia

```
pnpm i pinia
```

第二步：

在`src`文件夹下创建`store`文件夹，同时在该文件夹下创建`index.ts`文件，文件内容如下

```
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia

```

第三步：

在`store`文件夹下创建`modules`文件夹，存放各个模块的仓库

第四步：

在`main.ts`文件添加如下内容

```
// 引入仓库
import pinia from './store'
app.use(pinia)
```

## 1-15配置mock

> 参考：[vite-plugin-mock/README.zh_CN.md at main · vbenjs/vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md)

第一步：

下载相关的插件

```
pnpm install -D vite-plugin-mock@2.9.6 mockjs
```

第二步：

将下列代码插入到Vite的配置文件`vite.config.ts`中

```
// 这里
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({ command })=> {
  return {
    plugins: [
      vue(),
      // 这里
      viteMockServe({
        localEnabled: command === 'serve',
      }),
    ],
  }
}
```

> [!NOTE]
>
> defineConfig传入的参数发生改变

第三步：

在项目目录下（和src文件夹同级）创建一个mock的文件夹，创建一个user.ts的文件，文件内容如下

```
// 用户数据
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return { code: 200, data: { ...createUserList() } }
    },
  },
]

```

> [!NOTE]
>
> 可根据实际需求修改

## 1-16配置nprogress

第一步：

下载nprogress

```
pnpm i nprogress
```

第二步：

安装@types/nprogress

```
npm install @types/nprogress -D
```

## 1-17api接口统一管理

在`src`文件夹下创建`api`文件夹，用来统一管理项目的接口

## 1-18配置vue-router

第一步：

下载vue-router

```
pnpm add vue-router@4
```

第二步：

在`src`文件夹下新建文件夹`router`，同时新建两个文件`index.ts`和`routes.ts`（用于存放所有权限通用路由表和动态需要根据权限加载的路由表）

`routes.ts`文件示例：

```
// 存放所有权限通用路由表

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/salary',
        component: () => import('@/views/salary/index.vue'),
      },
      {
        path: '/selfAttendance',
        component: () => import('@/views/selfAttendance/index.vue'),
      },
    ],
  },
]

// 存放需要根据权限动态加载的路由表
export const asyncRouterMap = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/employee',
        component: () => import('@/views/employee/index.vue'),
        meta: { role: ['Manager', 'Minister'] },
      },
      {
        path: '/finance',
        component: () => import('@/views/finance/index.vue'),
        meta: { role: ['Manager', 'Finance'] },
      },
      {
        path: '/attendance',
        component: () => import('@/views/attendance/index.vue'),
        meta: { role: ['Manager', 'Attendance'] },
      },
      {
        path: '/operation',
        component: () => import('@/views/operation/index.vue'),
        meta: { role: ['Manager', 'Operation'] },
      },
      {
        path: '/authority',
        component: () => import('@/views/authority/index.vue'),
        meta: { role: ['Manager'] },
      },
    ],
  },
]

```

`index.ts`文件示例：

```
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRouterMap } from './routes'

// 引入nprogress
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 免登录白名单
const whiteList = ['/login', '/404']

// 引入user仓库
import useUserStore from '@/store/modules/user'

// 引入permission方法
import { hasPermission } from '@/utils/permission.ts'

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

// 全局前置路由
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  nprogress.start()
  if (userStore.token) {
    // 第一层判断：token值存在
    if (userStore.info.avatar === '' || userStore.info.userName === '') {
      // 第二层判断：info未获取
      await userStore.userMessage()
    }
    if (to.path === '/login') {
      // 第三层判断：路由路径是登陆页面路径
      next('/')
    } else {
      // 第三层判断：路由路径不是登陆页面路径
      if (to.meta && to.meta.role) {
        // 第四层判断：页面需要权限
        if (hasPermission(userStore.info.roles, to)) {
          // 第五层：有权限
          next()
        } else {
          // 第五层判断：无权限
          next('/404')
        }
      } else {
        // 第三层判断：页面不需要权限
        next()
      }
    }
  } else {
    // 第一层判断：token值不存在
    if (whiteList.includes(to.path)) {
      // 第二层判断：路由路径在免登录白名单上
      next()
    } else {
      // 第二层登录：登录路径不在免登录白名单上
      next('/login')
    }
  }
})

// 全局后置路由
router.afterEach(() => {
  nprogress.done()
})

// 导出router
export default router

```

第三步：

在`main.ts`文件中，加入如下内容：

```
// 引入路由
import router from './router'
app.use(router)
```

###

## 1-19权限校验工具类

`permission.ts`文件存放在`src/utils`文件夹下，文件内容如下：

```
// 校验用户是否具有访问这个路由的权限
// roles：用户身份
// routes：传入动态路由表中二级路由对象
export function hasPermission(roles: any, routes: any) {
  return roles.some((role: any) => {
    return routes.meta.role.includes(role)
  })
}
```

该方法需要传入roles和routes这两个参数。

roles是用户对应的权限数组，routes是一个路由对象。

在路由对象中通过meta标签来标示该页面能访问的权限，如`meta: { role: ['Manager','Minister'] }`表示该页面只有Manager或者Minister的权限才能有资格进入。

# 2-权限校验

## 2-1二次封装axios

> [!NOTE]
>
> 配置请参考[上面](##1-13二次封装axios)，此处重点在于业务逻辑的介绍

**自定义axios**

1. 设置baseURL，需要结合[配置环境变量](##1-11配置环境变量)
2. 设置timeout

**请求拦截器**

1. 判断user仓库是否存有token，有则设置请求头携带token

**响应拦截器**

1. 响应成功，简化请求返回的数据
2. 响应失败，调用ElMessage组件，展示错误信息

## 2-1配置api

```
import request from '@/utils/request'

import type { loginForm, loginResponseData, userResponseData } from './types'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

// 获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)

```

## 2-2配置user仓库

> [!NOTE]
>
> 需要使用js-cookie和自定义的api
>
> 创建`src/store/modules`路径下的`user.ts`文件

**state**

1. 初始化时，仓库中的Token需要读取本地Token
2. 包括token和用户其他信息（用户姓名，头像等）

**actions**

> [!NOTE]
>
> 含有三种方法，用户登录，获取用户信息，退出登录

1. 用户登录方法：调用api中的用户登录方法，请求成功，则为state中的token设置值，并将token存储于本地cookie
2. 获取用户信息方法：用Token获取用户其他信息，为state中其他用户信息设置值
3. 退出登录

## 2-2配置路由

路由要判断仓库里面是否有token

**全局前置路由**

1. 开启nprogress

**全局后置路由**

1. 关闭nprogress
