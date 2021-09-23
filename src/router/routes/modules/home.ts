/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-09-23 16:45:46
 */
import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const dashboard: AppRouteModule = {
  path: '/tabbar',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/tabbar/home',
  meta: {
    title: '首页',
    icon: 'el-icon-copy-document',
  },
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
      },
    },
    {
      path: 'me',
      name: 'Me',
      component: () => import('@/views/me/index.vue'),
      meta: {
        title: '我的',
      },
    },
  ],
};

export default dashboard;
