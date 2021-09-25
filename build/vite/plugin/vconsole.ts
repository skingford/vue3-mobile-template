/*
 * @Author: kingford
 * @Date: 2021-09-24 17:53:13
 * @LastEditTime: 2021-09-25 09:19:22
 */
import { viteVConsole } from 'vite-plugin-vconsole';
import { resolve } from 'path';

const ENTRY_PATH = resolve(process.cwd(), 'src/main.ts');

export function vconsolePlugin() {
  console.log('ENTRY_PATH:', ENTRY_PATH);

  const vconsolePlugin = viteVConsole({
    entry: ENTRY_PATH,
    localEnabled: true,
    enabled: true,
    config: {
      maxLogNumber: 1000,
      theme: 'light',
      onReady: () => {
        console.log('vconsole ready finished');
      },
    },
  });

  return vconsolePlugin;
}
