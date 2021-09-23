<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:15:47
 * @LastEditTime: 2021-09-23 16:30:29
-->
<template>
  <app-header></app-header>
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
