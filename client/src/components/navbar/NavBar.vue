<template>
  <nav class="nav-container">
    <div class="logo">
      <router-link to="/" class="logo">
        <p>#notevue</p>
      </router-link>
    </div>
    <div class="links">
      <nav-link :href="'/sign-up'" :name="'register'" />
      <nav-link :href="'/sign-in'" :name="'login'" />
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
  display: flex;
  align-items: center;
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
  .links {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
