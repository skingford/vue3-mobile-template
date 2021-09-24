/*
 * @Author: kingford
 * @Date: 2021-09-24 17:53:13
 * @LastEditTime: 2021-09-24 18:03:23
 */
import { viteVConsole } from 'vite-plugin-vconsole';
import { resolve } from 'path';

const ENTRY_PATH = resolve(process.cwd(), 'src/main.ts');

export function vconsolePlugin() {
  const vconsolePlugin = viteVConsole({
    entry: ENTRY_PATH,
    localEnabled: true,
    enabled: true,
    config: {
      maxLogNumber: 1000,
      theme: 'dark',
    },
  });

  return vconsolePlugin;
}
