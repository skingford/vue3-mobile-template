/*
 * @Author: kingford
 * @Date: 2021-07-26 09:02:47
 * @LastEditTime: 2021-09-23 14:20:08
 */
import styleImport from 'vite-plugin-style-import';

export function configStyleImportPlugin() {
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      },
    ],
  });
  return styleImportPlugin;
}
