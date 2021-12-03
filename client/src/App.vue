<template>
  <div id="nav" class="nav">
    <router-link class="nav-link" to="/"> Home </router-link>
    <router-link class="nav-link" to="/sign-in">Sign In</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
.nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 70px;
  padding: 0 25px;
  background-color: azure;
  align-items: center;

  .nav-link {
    font-size: 24px;
    text-transform: uppercase;
    transition: all 300ms;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }
}
</style>
