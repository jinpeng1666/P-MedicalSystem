// 存放所有权限通用路由表

export const constantRouterMap = [
  // 登录路由
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  // 首页路由
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      // 首页路由
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
        },
        children: [],
      },
      // 薪资路由
      {
        path: '/salary',
        component: () => import('@/views/salary/index.vue'),
        meta: {
          title: '薪资',
          icon: 'Histogram',
        },
        children: [],
      },
      // 出勤路由
      {
        path: '/attendance',
        component: () => import('@/views/attendance/index.vue'),
        meta: {
          title: '出勤',
          icon: 'DataLine',
        },
        children: [],
      },
    ],
  },
]

// 存放需要根据权限动态加载的路由表
export const asyncRouterMap = [
  // 权限管理路由
  {
    path: '/acl',
    meta: {
      title: '权限管理',
      icon: 'Lock',
      role: ['Dean'],
    },
    children: [
      {
        path: '/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          title: '权限分配',
          icon: 'User',
          role: ['Dean'],
        },
        children: [],
      },
      {
        path: '/managementSalary',
        component: () => import('@/views/acl/managementSalary/index.vue'),
        meta: {
          title: '薪资管理',
          icon: 'Histogram',
          role: ['Dean'],
        },
        children: [],
      },
    ],
  },
  // 404路由
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  // 其他不存在路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
]
