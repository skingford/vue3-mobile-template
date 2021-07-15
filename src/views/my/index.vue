<!--
 * @Author: kingford
 * @Date: 2021-07-12 22:11:40
 * @LastEditTime: 2021-07-14 01:14:07
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

    const handleProxy = {
      get(obj: any, prop: any) {
        console.log(obj[prop]);
      },
    };

    const p = new Proxy(form, handleProxy);

    const onChange = (e: { target: HTMLInputElement }) => {
      p.name = e.target.value;
    };

    return {
      form,
      onChange,
    };
  },
});
</script>
