<!--
 * @Author: kingford
 * @Date: 2021-07-11 10:24:03
 * @LastEditTime: 2021-09-28 09:58:27
-->
<template>
  <van-pull-refresh v-model="currentRefreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="currentLoading"
      :finished="currentFinished"
      :finished-text="finishedText"
      @load="onLoad"
    >
      <slot></slot>
    </van-list>
  </van-pull-refresh>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    refreshing: {
      type: Boolean,
      default: false,
    },
    onRefresh: {
      type: Function,
      default: () => {},
    },
    loading: {
      //loading 设置为 true，表示处于加载状态
      type: Boolean,
      default: false,
    },
    finished: {
      type: Boolean,
      default: false,
    },
    finishedText: {
      type: String,
      default: '没有更多了',
    },
    onLoad: {
      type: Function,
      default: () => {},
    },
  },

  setup(props, { emit }) {
    const currentRefreshing = computed({
      get: () => {
        return props.refreshing;
      },
      set: (val) => {
        emit('update:refreshing', val);
      },
    });

    const currentLoading = computed({
      get: () => {
        return props.loading;
      },
      set: (val) => {
        emit('update:loading', val);
      },
    });

    const currentFinished = computed({
      get: () => {
        return props.finished;
      },
      set: (val) => {
        emit('update:finished', val);
      },
    });

    const onLoad = () => {
      emit('onLoad');
    };

    const onRefresh = () => {
      // 清空列表数据
      currentFinished.value = false;
      // 重新加载数据
      currentLoading.value = true;
      onLoad();
    };

    return {
      onLoad,
      onRefresh,
      currentRefreshing,
      currentLoading,
      currentFinished,
    };
  },
});
</script>
<style lang="scss">
.home {
  font-size: 20px;
  color: $color;
  padding: 10px;
}
</style>
