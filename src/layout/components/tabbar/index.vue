<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:13:24
 * @LastEditTime: 2021-09-24 10:39:21
-->
<template>
  <van-tabbar route active-color="#1989fa" inactive-color="#ccc" safe-area-inset-bottom>
    <van-tabbar-item replace to="/tabbar/home" icon="wap-home-o">主页面</van-tabbar-item>
    <van-tabbar-item replace to="/tabbar/news" icon="manager-o" :badge="msgNum">
      消息
    </van-tabbar-item>
    <van-tabbar-item replace to="/tabbar/me" icon="manager-o"> 个人中心 </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    msgNum: {
      type: Number,
      default: 0,
    },
  },
});
</script>
