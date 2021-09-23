/*
 * @Author: kingford
 * @Date: 2021-08-24 09:00:00
 * @LastEditTime: 2021-09-23 17:11:28
 */

// 根据字段分组
export function groupData(data, filed) {
  let map = {};
  let dest: any[] = [];

  data.forEach((item: any) => {
    if (!map[item[filed]]) {
      dest.push({
        [filed]: item[filed],
        list: [item],
      });
      map[item[filed]] = item;
    } else {
      dest.forEach((dItem: any) => {
        if (dItem[filed] === item[filed]) {
          dItem.list.push(item);
        }
      });
    }
  });
  return dest;
}

// 重新排序数组
export function transpose(array: any[]) {
  if (!array || !array.length) return [];
  const copyArray = [...array];
  const list: any[] = [];
  const half = Math.ceil(copyArray.length / 2);
  const leftHalf = copyArray.splice(0, half);
  const rightHalf = copyArray.splice(-half);

  for (let i = 0; i < leftHalf.length; i++) {
    const left = leftHalf[i];
    const right = rightHalf[i];
    if (left && right) {
      // 偶数
      list.push(left, right);
    } else {
      // 奇数
      list.push(left);
    }
  }
  return list;
}
