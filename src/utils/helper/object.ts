/*
 * @Author: kingford
 * @Date: 2021-09-23 17:12:14
 * @LastEditTime: 2021-09-23 17:51:55
 */
interface PartParams {
  [key: string]: unknown;
}

const isVoid = (value) => value === undefined || value === null || value === '';

// 比较两个对象
export function compareObject(oldMap: PartParams, newMap: PartParams) {
  const newParams: PartParams = {};
  Object.keys(oldMap).forEach((key) => {
    if (oldMap[key] !== newMap[key]) {
      newParams[key] = newMap[key];
    }
  });
  return newParams;
}

// 清除空值属性
export const cleanObject = (object) => {
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
