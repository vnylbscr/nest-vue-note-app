<template>
  <div class="root">
    <div class="ui two column stackable center aligned page grid">
      <div class="column twelve wide">
        <form @submit="handleSubmit">
          <div class="ui labeled input">
            <div class="ui label">e-mail or username</div>
            <input
              type="text"
              placeholder="email or username"
              @change="handleChange"
              @blur="handleBlur"
              ref="email"
              name="email"
            />
          </div>
          <div class="ui labeled input">
            <div class="ui label">password</div>
            <input
              type="text"
              placeholder="password"
              @change="handleChange"
              @blur="handleBlur"
              ref="password"
              name="password"
            />
          </div>
          <button class="primary ui button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/runtime-core';
// import CustomInput from '../components/Input.vue';
import NavBar from '../components/navbar/NavBar.vue';
export default defineComponent({
  name: 'SignIn',
  components: {
    // CustomInput,
  },
  props: ['click'],
  setup() {
    const email = ref('');
    const password = ref('');

    const errors = ref({
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      console.log('text is sign in', e.target.value);
      email.value = e.target.value;
    };

    const handleBlur = (e) => {};

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
    };
    return {
      handleChange,
      email,
      password,
      handleBlur,
      handleSubmit,
    };
  },
  beforeMount() {
    // this.$ref.email.focus();
    console.log('ulaa');
  },
});
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #2c7a7b;
  .box {
    background-color: red;
  }
}
</style>
