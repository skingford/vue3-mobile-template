/*
 * @Author: kingford
 * @Date: 2021-07-14 00:56:10
 * @LastEditTime: 2021-07-14 01:01:46
 */

interface PartParams {
  [key: string]: unknown;
}

export function changeParams(oldMap: PartParams, newMap: PartParams) {
  const newParams: PartParams = {};
  Object.keys(oldMap).forEach((key) => {
    if (oldMap[key] !== newMap[key]) {
      newParams[key] = newMap[key];
    }
  });
  return newParams;
}
