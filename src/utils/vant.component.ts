/*
 * @Author: kingford
 * @Date: 2021-07-11 10:41:34
 * @LastEditTime: 2021-07-11 11:13:58
 */
import { DatetimePicker, Button, List, Icon, Tabbar, TabbarItem } from 'vant';

const vantComponents = [DatetimePicker, Button, List, Icon, Tabbar, TabbarItem];

export function useVantComponet(app: any) {
  vantComponents.forEach((v) => {
    app.use(v);
  });
}
