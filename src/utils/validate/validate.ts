/*
 * @Author: kingford
 * @Date: 2021-07-26 11:53:07
 * @LastEditTime: 2021-09-27 19:05:29
 */

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path);

export const isContainChinese = (str: string) => /[\u4E00-\u9FA5]/.test(str);
