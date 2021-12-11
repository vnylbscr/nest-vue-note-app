<template>
  <div class="root">
    <div class="box">
      <h3>#notevue.</h3>
      <h5>save your notes. use anywhere you want.</h5>
    </div>

    <div class="bottom-section">
      <router-link to="/sign-up">
        <p class="account">create account free.</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';
.root {
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: rgb(212, 174, 238);
  font-size: 16px;
  background: linear-gradient(
    90deg,
    rgba(212, 174, 238, 1) 14%,
    rgba(153, 210, 184, 0.68531162464986) 88%
  );
  .box {
    @media screen and (max-width: 625px) {
      h3,
      h5 {
        font-size: 1.5em !important;
      }
    }
    width: 30%;
    height: 40%;
    background: bisque;
    border-radius: 1em;
    box-shadow: 1px 2px #aaa;
    padding: 1em;
    text-align: center;
    h3 {
      font-size: 2.5em;
      padding: 0.4em;
    }
    h5 {
      font-size: 2em;
      font-weight: 500;
      color: #232323;
      padding: 0.5em;
    }
  }
  .bottom-section {
    width: 100%;
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    .account {
      @include underline_effect(2em, 3px);
    }
  }
}
</style>
