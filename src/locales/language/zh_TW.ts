/*
 * @Author: kingford
 * @Date: 2021-09-27 16:06:38
 * @LastEditTime: 2021-09-27 16:06:39
 */
import { genMessage } from '../helper';

const modules = import.meta.globEager('./zh-TW/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh-TW'),
  },
};
