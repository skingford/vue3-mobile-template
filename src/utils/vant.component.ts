/*
 * @Author: kingford
 * @Date: 2021-07-11 10:41:34
 * @LastEditTime: 2021-07-16 00:25:58
 */
import { App } from 'vue';
import { DatetimePicker, Button, List, Icon, Tabbar, TabbarItem } from 'vant';

const vantComponents = [DatetimePicker, Button, List, Icon, Tabbar, TabbarItem];

export function useVantComponet(app: App) {
  vantComponents.forEach((v) => {
    app.use(v);
  });
}
