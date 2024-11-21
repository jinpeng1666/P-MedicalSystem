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
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
        children: [],
      },
      {
        path: '/employee',
        component: () => import('@/views/employee/index.vue'),
        meta: {
          title: '员工',
        },
        children: [],
      },
      {
        path: '/department',
        component: () => import('@/views/department/index.vue'),
        meta: {
          title: '部门',
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

// 存放需要根据权限动态加载的路由表
export const asyncRouterMap = [
  // {
  //   path: '/',
  //   component: () => import('@/layout/index.vue'),
  //   name: 'layout',
  //   redirect: '/home',
  //   children: [
  //     {
  //       path: '/employee',
  //       component: () => import('@/views/employee/index.vue'),
  //       meta: { role: ['Manager', 'Minister'] },
  //     },
  //     {
  //       path: '/finance',
  //       component: () => import('@/views/finance/index.vue'),
  //       meta: { role: ['Manager', 'Finance'] },
  //     },
  //     {
  //       path: '/attendance',
  //       component: () => import('@/views/attendance/index.vue'),
  //       meta: { role: ['Manager', 'Attendance'] },
  //     },
  //     {
  //       path: '/operation',
  //       component: () => import('@/views/operation/index.vue'),
  //       meta: { role: ['Manager', 'Operation'] },
  //     },
  //     {
  //       path: '/authority',
  //       component: () => import('@/views/authority/index.vue'),
  //       meta: { role: ['Manager'] },
  //     },
  //   ],
  // },
]
