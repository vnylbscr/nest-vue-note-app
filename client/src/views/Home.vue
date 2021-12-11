<template>
  <div class="root">
    <h1>welcome back, {{ user.username }}</h1>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    const user = this.$store.state.user;

    return {
      user,
    };
  },
  name: 'Home',
});
</script>

<style lang="scss" scoped>
.root {
  height: 100vh;
  background: red;
}
</style>
