<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:19:30
 * @LastEditTime: 2021-09-23 19:06:21
-->
<template>
  <div class="header-container">
    <div v-if="isLeftButton" class="header-icon" @click="goBack">
      <van-icon name="arrow-left" />
    </div>
    <span>{{ title }}</span>
    <slot name="right"></slot>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
export default {
  props: {
    // 头部标题
    title: { type: String, default: 'jin-app' },
    // 是否显示返回按钮
    isLeftButton: { type: Boolean, default: true },
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };

    return {
      goBack,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 60px;
  background: linear-gradient(45deg, #fc9681, #409eff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #ffffff;
  position: relative;

  .header-icon {
    position: absolute;
    height: 100%;
    left: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;

    &:hover,
    &:focus,
    &:active {
      color: mix(#ffffff, #000000, 80);
    }
  }
}
</style>
