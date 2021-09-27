/*
 * @Author: kingford
 * @Date: 2021-09-27 11:51:53
 * @LastEditTime: 2021-09-27 11:55:16
 */
import { Locale } from 'vant';

// 引入语言包
import zhCN from 'vant/es/locale/lang/zh-CN';
import zhHK from 'vant/es/locale/lang/zh-HK';
import zhTW from 'vant/es/locale/lang/zh-TW';
import enUS from 'vant/es/locale/lang/en-US';

export function setLanguage(lang: string = 'zh-CN') {
  switch (lang) {
    case 'en-US':
      Locale.use('en-US', enUS);
      break;
    case 'zh-HK':
      Locale.use('zh-HK', zhHK);
      break;
    case 'zh-TW':
      Locale.use('zh-TW', zhTW);
      break;
    default:
      Locale.use('zh-CN', zhCN);
  }
}
