/*
 * @Author: kingford
 * @Date: 2021-09-23 18:00:06
 * @LastEditTime: 2021-09-25 10:06:20
 */
import { setupREM } from '@/config';
import FastClick from 'fastclick';

function setupFastClick() {
  window.addEventListener(
    'load',
    function () {
      new FastClick(document.body);
    },
    false
  );
}

export function initAppConfig() {
  // rem 设置
  setupREM();
  // click 延迟
  setupFastClick();
}
