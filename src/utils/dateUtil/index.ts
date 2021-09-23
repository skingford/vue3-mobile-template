/*
 * @Author: kingford
 * @Date: 2021-07-26 10:17:39
 * @LastEditTime: 2021-09-23 16:59:36
 */

import dayjs from 'dayjs';
import { DATE_TIME_FORMAT, DATE_FORMAT, dateType } from './constant';

// 格式化日期时间
export function format(date: dateType, format = DATE_TIME_FORMAT): string {
  if (!date) {
    return '';
  }
  return dayjs(date).format(format);
}

// 格式化日期
export function formatToDate(date: dateType): string {
  if (!date) {
    return '';
  }
  return format(date, DATE_FORMAT);
}

//最近七天
export const withLatestWeek = (format = DATE_FORMAT) => {
  const now = dayjs().format(format);
  const day7s = dayjs().subtract(7, 'day').format(format);
  return [day7s, now];
};

// date2在date之后
export const isAfter = (date, date2) => {
  return dayjs(date).isAfter(date2);
};

// 将分钟转
export function minuteToHour(value) {
  if (!value) {
    return;
  }
  // 将分钟转换为秒
  const s = Number(value) * 60;
  let secondTime = parseInt(s); // 秒
  let minuteTime = 0; // 分
  let hourTime = 0; // 小时
  let dayTime = 0; // 天
  let time = '';

  if (secondTime > 60) {
    //如果秒数大于60，将秒数转换成整数
    //获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60);

    //获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60);

    //如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
      //获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60);

      //获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60);
    }

    // 如果小时大于24，将小时转换成天
    if (hourTime > 24) {
      // 获取天，获取小时除以24，得到整数天
      dayTime = parseInt(hourTime / 24);
      // 获取小时后取佘的小时
      hourTime = parseInt(hourTime % 24);
    }
  }

  if (minuteTime > 0) {
    time = parseInt(minuteTime) + '分钟' + time;
  }

  if (hourTime > 0) {
    time = '' + parseInt(hourTime) + '小时' + time;
  }

  if (dayTime > 0) {
    time = '' + parseInt(dayTime) + '天' + time;
  }

  return time;
}

export const dateUtil = dayjs;
