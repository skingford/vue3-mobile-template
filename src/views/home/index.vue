<!--
 * @Author: kingford
 * @Date: 2021-07-11 10:24:03
 * @LastEditTime: 2021-09-27 16:16:35
-->
<template>
  <div> === {{ t('home.name') }} === </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useI18n } from '@/hooks/web/useI18n';

export default defineComponent({
  components: {},
  setup() {
    const { t } = useI18n();
    const state = reactive({});

    return {
      t,
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
