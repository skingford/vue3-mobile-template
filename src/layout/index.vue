<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:15:47
 * @LastEditTime: 2021-09-24 11:00:04
-->
<template>
  <div class="app-layout">
    <app-header :leftArrow="false"></app-header>
    <div class="app-layout-content">
      <router-view></router-view>
    </div>
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
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &-content {
    flex-grow: 1;
  }
}
</style>
