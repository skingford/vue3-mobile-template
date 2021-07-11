import { path } from 'path';
/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-07-11 12:40:19
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import refComp from '@/compositions/ref.vue';
import renativeComp from '@/compositions/reactive.vue';
import computedComp from '@/compositions/computed.vue';
import watchComp from '@/compositions/watch.vue';
import home from '@/view/home.vue';
import AppRouter from '@/layout/AppRouter.vue';

const routes = [
  {
    path: '/',
    component: AppRouter,
    children: [
      { path: '', component: watchComp },
      { path: 'home', component: home },
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
