/*
 * @Author: kingford
 * @Date: 2021-09-27 14:10:56
 * @LastEditTime: 2021-09-27 16:08:04
 */

import type { LocaleSetting, LocaleType } from '#/config';

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en',
  ZH_TW: 'zh_TW',
};

export const localeSetting: LocaleSetting = {
  showPicker: true,
  // Locale
  locale: LOCALE.ZH_CN,
  // Default locale
  fallback: LOCALE.ZH_CN,
  // available Locales
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};

// locale list
export const localeList: any[] = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN,
  },
  {
    text: '繁体中文',
    event: LOCALE.ZH_TW,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
];
