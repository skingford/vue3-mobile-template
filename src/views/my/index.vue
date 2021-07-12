<!--
 * @Author: kingford
 * @Date: 2021-07-12 22:11:40
 * @LastEditTime: 2021-07-12 23:47:12
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

export default defineComponent({
  setup() {
    const form = reactive({
      name: 'kf',
      age: 1,
      sex: 1,
    });

    const newForm: string[] = [];

    const onChange = (e: { target: HTMLInputElement }) => {
      console.log(e.target.value);
      console.log(e.target.name);
      const v = e.target.name;

      const isExit = newForm.indexOf(v);
      if (isExit === -1) {
        newForm.push(e.target.name);
      }
      console.log(newForm);
    };

    let handler = {
      get: function (target: { [key: string]: unknown }, name: string) {
        console.log(target[name]);
        return name in target ? target[name] : '';
      },
    };

    let p = new Proxy(form, handler);

    p.name = 'kingford';
    p.age = 18;

    return {
      form,
      onChange,
    };
  },
});
</script>
