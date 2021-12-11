<template>
  <div class="root">
    <div class="ui equal width stackable center aligned padded grid">
      <div class="row">
        <div class="two ui column center end aligned grid">
          <div class="column twelve wide">
            <h1 class="ui header">register note app.</h1>
          </div>
          <div class="column sixteen wide">
            <p class="heading">
              don't have account?
              <router-link to="/sign-up" class="animated-link">
                create
              </router-link>
            </p>
          </div>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="ui five column center aligned page grid">
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
                v-bind:class="{ error: v$.form.password.$error }"
                class="ui labeled fluid input large"
              >
                <div class="ui label">password</div>
                <input
                  type="password"
                  placeholder="password"
                  ref="password"
                  name="password"
                  v-model="v$.form.password.$model"
                />
              </div>
            </div>
            <div class="column sixteen wide">
              <button class="primary fluid large ui button" type="submit">
                login
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
  methods: {
    focusEmail() {
      this.$refs.email.focus();
    },
    handleSubmit(e) {
      const store = this.$store;
      if (this.v$.$invalid) {
        this.v$.form.$touch();
        return;
      } else {
        store.dispatch({
          type: 'login',
          payload: {
            ...this.form,
          },
        });
      }
    },
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
  mounted() {
    this.focusEmail();
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';
.root {
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
  font-size: 16px;
  display: flex;
  background: rgb(212, 174, 238);
  background: linear-gradient(
    90deg,
    rgba(212, 174, 238, 1) 14%,
    rgba(153, 210, 184, 0.68531162464986) 88%
  );

  .submit-error {
    color: red;
    font-size: 2em;
    margin: 24px 8px;
  }

  .box {
    background-color: red;
  }
  .animated-link {
    @include underline_effect(14px, 2px);
  }
}
</style>
