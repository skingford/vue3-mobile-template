<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:15:47
 * @LastEditTime: 2021-07-11 11:19:50
-->
<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';

export default defineComponent({
  components: { AppHeader, AppFooter },
});
</script>
