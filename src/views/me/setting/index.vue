<!--
 * @Author: kingford
 * @Date: 2021-09-27 11:09:37
 * @LastEditTime: 2021-09-27 11:36:15
-->
<template>
  <div class="me">
    <van-cell-group inset>
      <van-cell icon="font-o" title="主题配置" value="选择主题" />
      <van-cell icon="setting-o" title="语言配置" value="切换语言" />
    </van-cell-group>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss" scoped>
.me {
  padding: 16px 0;
  height: 100%;
  background-color: #f7f8fa;
}
</style>
