/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-09-24 11:12:41
 */
import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/error-log',
  meta: {
    title: '系统',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: 'error-log',
      name: 'SystemErrorLog',
      component: () => import('@/views/system/error-log/index.vue'),
      meta: {
        title: '系统错误日志',
      },
    },
  ],
};

export default system;
