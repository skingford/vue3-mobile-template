<!--
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-09-23 20:17:42
-->
<template>
  <van-config-provider :theme-vars="themeVars">
    <div v-cloak>
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </van-config-provider>
</template>
<script lang="ts">
import { navBarConfig } from '@/hooks/vant';

export default {
  setup() {
    const themeVars = {
      ...navBarConfig,
    };

    return {
      themeVars,
    };
  },
};
</script>
