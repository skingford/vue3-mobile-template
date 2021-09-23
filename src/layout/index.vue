<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:15:47
 * @LastEditTime: 2021-09-23 20:02:49
-->
<template>
  <app-header :leftArrow="false"></app-header>
  <router-view></router-view>
  <app-tabbar></app-tabbar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { AppHeader, AppTabbar } from './components';

export default defineComponent({
  components: { AppHeader, AppTabbar },
});
</script>
