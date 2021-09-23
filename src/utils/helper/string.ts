/*
 * @Author: kingford
 * @Date: 2021-09-23 17:28:14
 * @LastEditTime: 2021-09-23 17:28:15
 */
export function firstUpperCase(str: string): string {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
