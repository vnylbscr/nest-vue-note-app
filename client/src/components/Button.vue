<template>
  <button class="ui button primary" @click="handleClick">
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
}
</style>
