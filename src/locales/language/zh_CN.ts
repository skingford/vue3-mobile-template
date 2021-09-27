/*
 * @Author: kingford
 * @Date: 2021-09-27 14:39:48
 * @LastEditTime: 2021-09-27 14:40:42
 */
import { genMessage } from '../helper';

const modules = import.meta.globEager('./zh-CN/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
  },
};
