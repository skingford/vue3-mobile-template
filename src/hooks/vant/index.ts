/*
 * @Author: kingford
 * @Date: 2021-09-23 15:00:50
 * @LastEditTime: 2021-09-27 11:56:06
 */
import type { App } from 'vue';
import { setLanguage } from './language';
import { vantComponents } from './vant.component';
export * from './themeConfig';

export function setupVantComponet(app: App<Element>) {
  vantComponents.forEach((v) => {
    app.use(v);
  });

  // 设置语言
  setLanguage();
}
