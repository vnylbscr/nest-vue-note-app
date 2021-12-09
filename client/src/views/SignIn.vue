<template>
  <div class="root">
    <div class="ui equal width center aligned padded grid">
      <div class="row">
        <div class="two ui column stackable center end aligned grid">
          <div class="column twelve wide">
            <h1 class="ui header">register note app.</h1>
          </div>
          <div class="column sixteen wide">
            <p class="heading">
              don't have account?
              <router-link to="/sign-up"> create </router-link>
            </p>
          </div>
        </div>
        <form @submit="handleSubmit">
          <div class="ui five column stackable center aligned page grid">
            <div class="column sixteen wide">
              <div
                v-bind:class="{ error: v$.form.email.$error }"
                class="ui fluid labeled input large"
              >
                <div class="ui label">e-mail</div>
                <input
                  type="text"
                  placeholder="email"
                  ref="email"
                  name="email"
                  v-model="v$.form.email.$model"
                />
              </div>

              <div v-if="v$.form.email.$error">
                <div
                  v-if="v$.form.email.required.$invalid"
                  class="ui label red floated left"
                  style="margin-top: 10px"
                >
                  e-mail is required
                </div>

                <div
                  v-if="v$.form.email.email.$invalid"
                  class="ui label red floated left"
                  style="margin-top: 10px"
                >
                  e-mail is not valid.
                </div>
              </div>
            </div>

            <div class="column sixteen wide">
              <div
                v-bind:class="{ error: errors.password }"
                class="ui labeled fluid input large"
              >
                <div class="ui label">password</div>
                <input
                  type="password"
                  placeholder="password"
                  @change="handleChange"
                  @blur="handleBlur"
                  ref="password"
                  name="password"
                />
              </div>
            </div>
            <div class="column sixteen wide">
              <button class="primary fluid large ui button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/runtime-core';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email } from '@vuelidate/validators';
export default defineComponent({
  name: 'SignIn',
  components: {},
  props: ['click'],
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },
  beforeMount() {
    // this.$ref.email.focus();
    console.log('ulaa');
  },
  mounted() {
    this.$refs.email.focus();
  },
});
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
  display: flex;
  background: rgb(212, 174, 238);
  background: linear-gradient(
    90deg,
    rgba(212, 174, 238, 1) 14%,
    rgba(153, 210, 184, 0.68531162464986) 88%
  );

  .box {
    background-color: red;
  }
}
</style>
