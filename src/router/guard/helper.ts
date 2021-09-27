/*
 * @Author: kingford
 * @Date: 2021-09-23 16:48:14
 * @LastEditTime: 2021-09-27 16:26:23
 */
import { getPageTitle } from '@/config/pageTitle';

// 设置页面标题
export function setPageTitle(title: string) {
  document.title = getPageTitle(title);
}
