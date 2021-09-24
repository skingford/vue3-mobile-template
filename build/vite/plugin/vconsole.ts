/*
 * @Author: kingford
 * @Date: 2021-09-24 17:53:13
 * @LastEditTime: 2021-09-24 17:58:11
 */
import { viteVConsole } from 'vite-plugin-vconsole';
import { resolve } from 'path';

export function vconsolePlugin() {
  const vconsolePlugin = viteVConsole({
    entry: resolve('src/main.ts'),
    localEnabled: true,
    enabled: true,
    config: {
      maxLogNumber: 1000,
      theme: 'dark',
    },
  });

  return vconsolePlugin;
}
