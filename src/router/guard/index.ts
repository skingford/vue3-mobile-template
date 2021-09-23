/*
 * @Author: kingford
 * @Date: 2021-07-27 10:19:52
 * @LastEditTime: 2021-09-23 17:57:07
 */

import NProgress from 'nprogress';
import type { Router } from 'vue-router';
import { setPageTitle } from './helper';

// 设置路由守卫
export function setupRouterGuard(router: Router) {
  NProgress.start();
  createPageGuard(router);
}

function createPageGuard(router: Router) {
  router.beforeEach(async (to, _, next) => {
    // 设置标题
    setPageTitle(to.meta.title);
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
