/*
 * @Author: kingford
 * @Date: 2021-09-23 16:50:27
 * @LastEditTime: 2021-09-29 17:41:47
 */
import { useI18n } from '@/hooks/web/useI18n';
import { isContainChinese } from '@/utils/validate';
import { getAppEnvConfig } from '@/utils/env';

const { t } = useI18n();
const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();

export function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${setPageTitle(pageTitle)} - ${VITE_GLOB_APP_TITLE}`;
  }
  return `${VITE_GLOB_APP_TITLE}`;
}

// 路由标题
export const tTitle = (title) => `router.${title}`;

// 设置tabbar标题
export const setPageTitle = (title) => {
  if (isContainChinese(title)) {
    return title;
  }
  return t(tTitle(title));
};
