<template>
  <div>
    {{ count }}
  </div>
  <h2 v-for="item in items" :key="item"></h2>
</template>

<script>
export default {
  computed() {
    return store.state.count;
  },
  data() {
    return {
      items: ['1', '2'],
    };
  },
};
</script>
