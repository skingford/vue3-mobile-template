<!--
 * @Author: kingford
 * @Date: 2021-07-11 11:19:30
 * @LastEditTime: 2021-09-23 20:10:33
-->
<template>
  <van-nav-bar
    safe-area-inset-top
    fixed
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    :left-arrow="leftArrow"
    :border="border"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { Toast } from 'vant';

export default {
  props: {
    // 头部标题
    title: { type: String, default: 'jin-app' },
    leftText: { type: String, default: '' },
    rightText: { type: String, default: '' },
    // 是否显示左侧箭头
    leftArrow: { type: Boolean, default: true },
    border: { type: Boolean, default: true },
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };

    const onClickLeft = () => Toast('返回');
    const onClickRight = () => Toast('按钮');

    return {
      goBack,
      onClickLeft,
      onClickRight,
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
