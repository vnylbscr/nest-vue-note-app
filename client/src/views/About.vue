<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form @submit="handleSubmit">
      <input type="text" value="text" @change="onChangeHandler" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'About',
  setup() {
    const text = ref('merto');

    const onChangeHandler = (e) => {
      text.value = e.target.value;
    };

    const handleSubmit = (e) => {
      console.log('submit', e);
      e.preventDefault();
    };

    return {
      text,
      onChangeHandler,
      handleSubmit,
    };
  },
});
</script>
