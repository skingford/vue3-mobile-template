/*
 * @Author: kingford
 * @Date: 2021-07-21 15:22:03
 * @LastEditTime: 2021-09-23 16:54:06
 */

import type { App } from 'vue';

export function setupGlobalProperties(app: App) {
  console.log(app);
  // app.config.globalProperties.$message = ElMessage;
}
