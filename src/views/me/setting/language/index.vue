<!--
 * @Author: kingford
 * @Date: 2021-09-27 15:42:44
 * @LastEditTime: 2021-09-27 19:42:18
-->
<template>
  <div class="p-2">当前语言:{{ t('home.name') }}({{ lang }})</div>
  <van-radio-group v-model="lang">
    <van-cell-group>
      <van-cell
        v-for="locale in localeList"
        :key="locale.event"
        :title="locale.text"
        clickable
        @click="selectLang"
      >
        <template #right-icon>
          <van-radio :name="locale.event" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { useLocale } from '@/locales/useLocale';
import type { LocaleType } from '#/config';
import { localeList } from '@/settings/localeSetting';
import { useI18n } from '@/hooks/web/useI18n';
import { useLocaleStore } from '@/store/modules/locale';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { changeLocale } = useLocale();
    const localStore = useLocaleStore();
    const state = reactive({ lang: localStore.localInfo.locale });

    async function selectLang() {
      await changeLocale(state.lang as LocaleType);
      location.reload();
    }

    return {
      t,
      selectLang,
      localeList,
      ...toRefs(state),
    };
  },
});
</script>
