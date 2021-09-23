/*
 * @Author: kingford
 * @Date: 2021-09-23 15:00:50
 * @LastEditTime: 2021-09-23 15:00:50
 */
import type { App } from 'vue';
import { vantComponents } from './vant.component';

export function setupVantComponet(app: App<Element>) {
  vantComponents.forEach((v) => {
    app.use(v);
  });
}
