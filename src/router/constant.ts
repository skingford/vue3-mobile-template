/*
 * @Author: kingford
 * @Date: 2021-07-24 11:43:09
 * @LastEditTime: 2021-09-24 11:33:23
 */
export const REDIRECT_NAME = 'Redirect';

export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

export const EXCEPTION_COMPONENT = () => import('@/views/system/exception/Exception.vue');

export const LAYOUT = () => import('@/layout/index.vue');
export const TABBAR_LAYOUT = () => import('@/layout/tabbar.vue');

export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME,
      });
    });
};
