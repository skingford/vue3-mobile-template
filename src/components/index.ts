/*
 * @Author: kingford
 * @Date: 2021-09-23 14:37:08
 * @LastEditTime: 2021-09-23 14:37:08
 */
import type { App } from 'vue';

// 全局组件
const modules = import.meta.globEager('./global/**/*.vue');

export function registerGlobalComponent(app: App) {
  Object.keys(modules).forEach((key) => {
    const component = modules[key].default;
    app.component(component.name, component);
  });
}
