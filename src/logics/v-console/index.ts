/*
 * @Author: kingford
 * @Date: 2021-09-24 17:36:57
 * @LastEditTime: 2021-09-24 17:36:58
 */
import VConsole from 'vconsole';
import { isProductionEnv } from '@/utils/env';

export function setupVConsole() {
  if (isProductionEnv) {
    return;
  }
  const vConsole = new VConsole();
  vConsole.setOption('maxLogNumber', 5000);
  //vConsole.destroy();
}
