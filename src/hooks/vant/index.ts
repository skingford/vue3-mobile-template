/*
 * @Author: kingford
 * @Date: 2021-09-23 15:00:50
 * @LastEditTime: 2021-09-23 20:21:03
 */
import type { App } from 'vue';
import { vantComponents } from './vant.component';
export * from './themeConfig';

import { Locale } from 'vant';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';

export function setupVantComponet(app: App<Element>) {
  vantComponents.forEach((v) => {
    app.use(v);
  });

  Locale.use('en-US', enUS);
}
