/*
 * @Author: kingford
 * @Date: 2021-09-27 14:39:48
 * @LastEditTime: 2021-09-27 14:41:25
 */
import { genMessage } from '../helper';
const modules = import.meta.globEager('./en/**/*.ts');

export default {
  message: {
    ...genMessage(modules, 'en'),
  },
  momentLocale: null,
  momentLocaleName: 'en',
};
