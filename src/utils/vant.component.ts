/*
 * @Author: kingford
 * @Date: 2021-07-11 10:41:34
 * @LastEditTime: 2021-07-11 10:49:05
 */
import { DatetimePicker, Button, List, Icon } from 'vant';

const vantComponents = [DatetimePicker, Button, List, Icon];

export function useVantComponet(app: any) {
  vantComponents.forEach((v) => {
    console.log(v);
    app.use(v);
  });
}
