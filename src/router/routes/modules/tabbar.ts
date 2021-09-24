/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-09-24 11:32:50
 */
import type { AppRouteModule } from '@/router/types';
import { TABBAR_LAYOUT as LAYOUT } from '@/router/constant';

const tabbar: AppRouteModule = {
  path: '/tabbar',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/tabbar/home',
  meta: {
    title: '首页',
    icon: 'wap-home-o',
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

export default tabbar;
