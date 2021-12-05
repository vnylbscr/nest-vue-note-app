<template>
  <div class="footer-container">
    <p class="footer-text">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      message: `Mert Genç ${new Date().getFullYear()} All Rights Reserved`,
    };
  },
};
</script>

<style lang="scss">
.footer-container {
  width: 100%;
  margin: 24px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  p {
    color: darkcyan;
    font-size: 24px;
    text-align: center;
  }
}
</style>
