<template>
  <div id="nav" class="nav">
    <nav-bar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from './components/footer.vue';
import NavBar from './components/navbar/NavBar.vue';
export default {
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style lan NavBarg="scss"></style>
