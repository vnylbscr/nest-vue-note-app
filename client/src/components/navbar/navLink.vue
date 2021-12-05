<template>
  <router-link class="active-item" :to="href">
    <button class="button">
      {{ name }}
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['href', 'name'],
};
</script>

<style lang="scss" scoped>
.active-item {
  font-size: 24px;
  color: black;
  text-decoration: none;
  transition: all 500 ms;
  padding: 4px;
  &:hover {
    color: aqua;
  }
  button {
    padding: 10px;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
}
</style>
