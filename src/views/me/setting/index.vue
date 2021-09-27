<!--
 * @Author: kingford
 * @Date: 2021-09-27 11:09:37
 * @LastEditTime: 2021-09-27 19:43:16
-->
<template>
  <div class="me">
    <van-cell-group inset>
      <van-cell icon="font-o" title="主题配置" value="选择主题" />
      <van-cell icon="setting-o" title="语言配置" :value="lang" is-link to="/me/setting-language" />
    </van-cell-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useLocaleStore } from '@/store/modules/locale';

export default defineComponent({
  setup() {
    const localStore = useLocaleStore();
    const state = reactive({ lang: localStore.localInfo.locale });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
.me {
  padding: 16px 0;
  height: 100%;
  background-color: #f7f8fa;
}
</style>
