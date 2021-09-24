<!--
 * @Author: kingford
 * @Date: 2021-07-24 22:27:48
 * @LastEditTime: 2021-09-24 15:01:13
-->
<template>
  <template v-if="errorLogInfoList && errorLogInfoList.length > 0">
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item
        v-for="err in errorLogInfoList"
        :key="err.time"
        :title="`错误类型：${err.name}`"
        :name="err.time"
      >
        <div>错误名称：{{ err.name }}</div>
        <div>错误类型：{{ err.type }}</div>
        <div>错误消息：{{ err.message }}</div>
        <div>错误详情：{{ err.detail }}</div>
        <div>来源地址：{{ err.url }}</div>
        <div>创建时间：{{ err.time }}</div>
      </van-collapse-item>
    </van-collapse>
  </template>
  <van-empty v-else image="search" description="暂无日志" />
  <van-button @click="create">生成错误</van-button>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useErrorLogStoreWithOut } from '@/store/modules/errorLog';

export default defineComponent({
  name: 'ErrorLog',
  setup() {
    const activeNames = ref<string>();
    const errorLogStore = useErrorLogStoreWithOut();
    const errorLogInfoList = computed(() => errorLogStore.errorLogInfoList);

    const create = () => {
      throw new Error('错误日志');
    };

    return { create, errorLogInfoList, activeNames };
  },
});
</script>
