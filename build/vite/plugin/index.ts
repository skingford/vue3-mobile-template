/*
 * @Author: kingford
 * @Date: 2021-07-29 10:44:50
 * @LastEditTime: 2021-09-25 09:35:56
 */
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import windiCSS from 'vite-plugin-windicss';

// 自定义插件配置
import { configHmrPlugin } from './hmr';
import { configSvgIconsPlugin } from './svgSprite';
import { configStyleImportPlugin } from './styleImport';
import { configHtmlPlugin } from './html';
import { configImageminPlugin } from './imagemin';
import { configCompressPlugin } from './compress';
import { configPwaConfig } from './pwa';
import { legacyPlugin } from './legacy';
//import { vconsolePlugin } from './vconsole';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_LEGACY,
    VITE_USE_IMAGEMIN,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;

  const vitePlugins = [vue(), vueJsx()];

  // vite-plugin-windicss
  // vitePlugins.push(windiCSS() as any);

  !isBuild && vitePlugins.push(configHmrPlugin());

  // vite-plugin-vconsole
  // !isBuild && vitePlugins.push(vconsolePlugin());

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacyPlugin());

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild) as any);

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin());

  // The following plugins only work in the production environment
  if (isBuild) {
    //vite-plugin-imagemin
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE) as any
    );

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv) as any);
  }

  return vitePlugins;
}
