<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:15:47
 * @LastEditTime: 2021-09-24 14:34:41
-->
<template>
  <div class="app-layout">
    <app-header :leftArrow="false"></app-header>
    <router-view></router-view>
    <app-tabbar></app-tabbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { AppHeader, AppTabbar } from './components';

export default defineComponent({
  components: { AppHeader, AppTabbar },
});
</script>

<style lang="scss" scoped>
.app-layout {
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: normal;
  word-wrap: break-word;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}
</style>
