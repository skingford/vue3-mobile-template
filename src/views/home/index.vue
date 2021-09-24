<!--
 * @Author: kingford
 * @Date: 2021-07-11 10:24:03
 * @LastEditTime: 2021-09-24 14:29:07
-->
<template>
  <div class="home">
    home
    <div class="t-1px">t-1px</div>
    <div class="r-1px">r-1px</div>
    <div class="b-1px">b-1px</div>
    <div class="l-1px">l-1px</div>
    <div class="f-1px">f-1px</div>
  </div>
  <div v-for="i in 100">{{ i }}2222222222222222222222222222serewrt23423vSDFEDdesert违法</div>
  <van-icon name="chat-o" />
  <van-button type="primary">主要按钮</van-button> <br />
  <van-button type="primary" size="large">大号按钮</van-button> <br />
  <van-button type="primary" size="normal">普通按钮</van-button> <br />
  <van-button type="primary" size="small">小型按钮</van-button> <br />
  <van-button type="primary" size="mini">迷你按钮</van-button> <br />
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
  color: $color;
  padding: 10px;
}
</style>
