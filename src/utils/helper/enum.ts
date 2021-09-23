/*
 * @Author: kingford
 * @Date: 2021-09-23 17:11:06
 * @LastEditTime: 2021-09-23 17:53:54
 */

import { isNumber } from './is';

interface EnumItem {
  value: string;
  label: unknown;
}

// 枚举转数组
export function mapEnumToOptions(_enum) {
  const options: EnumItem[] = [];
  for (const member in _enum)
    if (!isNumber(member))
      options.push({
        value: member,
        label: _enum[member],
      });
  return options;
}
