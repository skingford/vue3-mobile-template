<!--
 * @Author: kingford
 * @Date: 2021-07-24 22:27:48
 * @LastEditTime: 2021-09-24 11:34:53
-->
<template>
  <h2>错误日志</h2>
  <div v-for="err in errorLogInfoList" :key="err.time"> {{ err.message }}-{{ err.time }} </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useErrorLogStoreWithOut } from '@/store/modules/errorLog';

export default defineComponent({
  name: 'ErrorLog',
  setup() {
    const errorLogStore = useErrorLogStoreWithOut();
    const { errorLogInfoList = [] } = errorLogStore;
    console.log('errorLogInfoList:', errorLogInfoList);
    return { errorLogInfoList };
  },
});
</script>
