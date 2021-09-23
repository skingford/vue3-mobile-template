<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:19:30
 * @LastEditTime: 2021-07-11 11:27:08
-->
<template>
  <div class="header-container">
    <div v-if="showBtn" class="icon-container" @click="goLastPage">
      <van-icon name="arrow-left" />
    </div>
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
export default {
  props: {
    // 头部标题
    title: { type: String, default: 'jin' },
    // 是否显示返回按钮
    showBtn: { type: Boolean, default: true },
  },
  setup() {
    const router = useRouter();

    const goLastPage = () => {
      router.go(-1);
    };

    return {
      goLastPage,
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
  color: #fff;
  position: relative;
  .icon-container {
    position: absolute;
    height: 100%;
    left: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    &:hover,
    &:focus,
    &:active {
      color: mix(#fff, #000000, 80);
    }
  }
}
</style>
