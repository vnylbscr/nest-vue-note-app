<template>
  <nav class="nav-container">
    <div class="ui grid">
      <div class="seven column row">
        <div class="left three floated column">
          <router-link to="/" class="logo">
            <p>#notevue</p>
          </router-link>
        </div>
        <div class="right floated column">
          <nav-link :href="'/sign-up'" :name="'register'" />
          <nav-link :href="'/sign-in'" :name="'login'" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import navLink from './navLink.vue';
export default {
  components: { navLink },
  name: 'NavBar',
  props: {
    href: String,
    name: String,
  },
  methods: {
    handleClick() {
      console.log('clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  height: 60px;
  padding: 8px 16px;
  background-color: cadetblue;
  .logo {
    width: 90%;
    text-decoration: none;
    p {
      font-size: 32px;
      transition: all 300ms;
      &:hover {
        transform: scaleX(1.01);
        color: chocolate;
        cursor: pointer;
      }
    }
  }
}
</style>
