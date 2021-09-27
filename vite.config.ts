/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-09-27 14:25:33
 */
import { resolve } from 'path';
import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import { format } from './src/utils/dateUtil';

import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';
import { OUTPUT_DIR } from './build/constant';
import { createProxy } from './build/vite/proxy';
import pkg from './package.json';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: format(new Date()),
};

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@': pathResolve('src'),
        '#': pathResolve('types'),
        '@utils': pathResolve('src/utils'),
      },
    },
    // 定义全局常量
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },

    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },

    // 全局css
    css: {
      preprocessorOptions: {
        scss: {
          // 全局的scss
          additionalData: `@import "./src/styles/global.scss";`,
        },
      },
    },

    plugins: createVitePlugins(viteEnv, isBuild),

    server: {
      host: true, //'0.0.0.0'
      port: VITE_PORT,
      open: true,
      proxy: createProxy(VITE_PROXY),
    },
  };
};
