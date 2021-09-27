/*
 * @Author: kingford
 * @Date: 2021-09-27 10:51:09
 * @LastEditTime: 2021-09-27 10:51:10
 */
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({});

export function setupI18n(app: App) {
  app.use(i18n);
}
