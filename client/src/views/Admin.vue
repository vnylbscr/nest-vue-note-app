<template>
  <div>
    selam agalar

    <p>{{ user }}</p>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Admin',
  setup() {
    return {
      user: 'mert',
    };
  },
});
</script>
