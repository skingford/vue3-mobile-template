<!--
 * @Author: kingford
 * @Date: 2021-07-11 10:24:03
 * @LastEditTime: 2021-07-11 10:49:35
-->
<template>
  <div class="home">home</div>
  <van-icon name="chat-o" />
  <van-button type="primary">主要按钮</van-button>
  <van-button type="primary" size="large">大号按钮</van-button>
  <van-button type="primary" size="normal">普通按钮</van-button>
  <van-button type="primary" size="small">小型按钮</van-button>
  <van-button type="primary" size="mini">迷你按钮</van-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>
<style lang="scss">
.home {
  font-size: 20px;
}
</style>
