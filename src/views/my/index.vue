<!--
 * @Author: kingford
 * @Date: 2021-07-12 22:11:40
 * @LastEditTime: 2021-07-14 01:07:10
-->
<template>
  <div>
    <form>
      <input type="text" v-model="form.name" name="name" @change="onChange" />
      <hr />
      <input type="text" v-model="form.age" name="age" @change="onChange" />
      <hr />
      <input type="text" v-model="form.sex" name="sex" @change="onChange" />
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { changeParams } from '@utils/tool';

export default defineComponent({
  setup() {
    const copyForm: {
      [key: string]: unknown;
    } = { name: 'kingford', age: 18, sex: 1 };

    const form: {
      [key: string]: unknown;
    } = reactive({
      name: 'kf',
      age: 1,
      sex: 1,
    });

    const onChange = (e: { target: HTMLInputElement }) => {
      form.age = 20;
      const newMap = changeParams(copyForm, form);

      console.log(newMap);
    };

    return {
      form,
      onChange,
    };
  },
});
</script>
