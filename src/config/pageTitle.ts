/*
 * @Author: kingford
 * @Date: 2021-09-23 16:50:27
 * @LastEditTime: 2021-09-23 16:50:27
 */
import { getAppEnvConfig } from '@/utils/env';
const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();

export function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${VITE_GLOB_APP_TITLE}`;
  }
  return `${VITE_GLOB_APP_TITLE}`;
}
