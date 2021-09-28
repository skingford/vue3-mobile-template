/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-09-28 10:13:02
 */
import type { AppRouteModule } from '@/router/types';
import { TABBAR_LAYOUT as LAYOUT } from '@/router/constant';

const tabbar: AppRouteModule = {
  path: '/tabbar',
  name: 'Tabbar',
  component: LAYOUT,
  redirect: '/tabbar/home',
  meta: {
    title: 'tabbar.home',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: 'home',
      name: 'TabbarHome',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'tabbar.home',
      },
    },
    {
      path: 'news',
      name: 'TabbarNews',
      component: () => import('@/views/news/index.vue'),
      meta: {
        title: 'tabbar.news',
      },
    },
    {
      path: 'me',
      name: 'TabbarMe',
      component: () => import('@/views/me/index.vue'),
      meta: {
        title: 'tabbar.me',
      },
    },
  ],
};

export default tabbar;
