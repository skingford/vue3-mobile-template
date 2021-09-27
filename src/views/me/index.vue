<!--
 * @Author: kingford
 * @Date: 2021-07-12 22:11:40
 * @LastEditTime: 2021-09-27 11:41:32
-->
<template>
  <div class="me">
    <van-cell-group class="group-item" inset>
      <van-cell icon="setting-o" title="系统配置" value="选择主题" is-link to="/me/setting" />
      <van-cell icon="bill-o" title="我的订单" value="20" is-link />
    </van-cell-group>
    <van-cell-group inset>
      <van-cell icon="manager-o" title="个人中心" value="个人中心" />
      <van-cell icon="balance-o" title="我的余额" value="￥100.00" />
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

  .group-item {
    margin-bottom: 16px;
  }
}
</style>
