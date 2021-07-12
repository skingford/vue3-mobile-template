import { path } from 'path';
/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-07-12 22:12:50
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import refComp from '@/compositions/ref.vue';
import renativeComp from '@/compositions/reactive.vue';
import computedComp from '@/compositions/computed.vue';
import watchComp from '@/compositions/watch.vue';
import AppRouter from '@/layout/AppRouter.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppRouter,
    children: [
      {
        path: '',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '主页',
          keepAlive: true,
        },
      },
      { path: 'my', component: () => import('@/views/my/index.vue') },
    ],
  },
  { path: '/watch', component: watchComp },
  { path: '/ref', component: refComp },
  { path: '/reactive', component: renativeComp },
  { path: '/computed', component: computedComp },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
