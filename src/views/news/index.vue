<!--
 * @Author: kingford
 * @Date: 2021-07-11 10:24:03
 * @LastEditTime: 2021-09-28 10:00:40
-->
<template>
  <composition-list
    v-model:refreshing="refreshing"
    v-model:loading="loading"
    v-model:finished="finished"
    @onLoad="onLoadMore"
  >
    <template #default>
      <div v-for="item in list" :key="item">
        {{ item }} {{ t('home.name') }}
        <!-- <van-cell :title="item" /> -->
      </div>
    </template>
  </composition-list>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';
import { CompositionList } from '@/components';

export default defineComponent({
  components: { CompositionList },
  setup() {
    const { t } = useI18n();
    const state = reactive({ loading: false, finished: false, refreshing: false });

    const list = ref<number[]>([]);

    const onLoad = () => {
      setTimeout(() => {
        if (state.refreshing) {
          list.value = [];
          state.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        state.loading = false;

        if (list.value.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };

    const onLoadMore = () => {
      onLoad();
    };

    return {
      t,
      list,
      onLoadMore,
      ...toRefs(state),
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
