/*
 * @Author: kingford
 * @Date: 2021-06-17 00:15:21
 * @LastEditTime: 2021-07-11 11:30:25
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <router-view></router-view>
      </div>
    );
  },
});
