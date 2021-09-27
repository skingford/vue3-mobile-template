/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-09-27 15:43:07
 */
import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const MeRouteModule: AppRouteModule = {
  path: '/me',
  name: 'Me',
  component: LAYOUT,
  redirect: '/me/setting',
  meta: {
    title: '个人中心',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: 'setting',
      name: 'MeSetting',
      component: () => import('@/views/me/setting/index.vue'),
      meta: {
        title: '系统配置',
      },
    },
    {
      path: 'setting-language',
      name: 'MeSettingLanguage',
      component: () => import('@/views/me/setting/language/index.vue'),
      meta: {
        title: '选择语言',
      },
    },
  ],
};

export default MeRouteModule;
