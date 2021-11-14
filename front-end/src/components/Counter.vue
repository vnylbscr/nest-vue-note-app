<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
export default {
  computed() {
    return store.state.count;
  },
};
</script>
