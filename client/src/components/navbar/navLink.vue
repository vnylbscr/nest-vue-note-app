<template>
  <router-link class="active-item" :to="href">
    <button class="ui primary large button">
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
}
</style>
