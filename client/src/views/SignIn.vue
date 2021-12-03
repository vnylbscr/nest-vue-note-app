<template>
  <div class="container">
    <div class="box"></div>
    <CustomInput
      :label="label"
      :value="email"
      placeholder="merto"
      @change="handleChange"
    />

    <p>email is{{ email }}</p>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/runtime-core';
import CustomInput from '../components/Input.vue';
export default defineComponent({
  name: 'SignIn',
  components: {
    CustomInput,
  },
  setup() {
    const email = ref('');
    const password = ref('');

    const handleChange = (e) => {
      console.log('text is sign in', e.target.value);
      email.value = e.target.value;
    };
    return {
      handleChange,
      email,
      password,
    };
  },
});
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
