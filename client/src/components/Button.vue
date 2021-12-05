<template>
  <button @click="handleClick" class="main">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ['handleClick', 'name'],
  name: 'PrimaryButton',
};
</script>

<style lang="scss" scoped>
.main {
  padding: 8px;
  border-radius: 8px;
  color: aquamarine;
  background-color: bisque;
}
</style>
