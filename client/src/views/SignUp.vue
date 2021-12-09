<template>
  <div class="root">
    <div class="ui equal width center aligned padded grid">
      <div class="row">
        <div class="two ui column stackable center end aligned grid">
          <div class="column twelve wide">
            <h1 class="ui header">login the note app.</h1>
          </div>
          <div class="column sixteen wide">
            <p class="heading">
              you already have account?
              <router-link to="/sign-in"> sign-in </router-link>
            </p>
          </div>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="ui six column stackable center aligned page grid">
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
                v-bind:class="{ error: v$.form.username.$error }"
                class="ui fluid labeled input large"
              >
                <div class="ui label">username</div>
                <input
                  type="text"
                  placeholder="username"
                  ref="username"
                  name="username"
                  v-model="v$.form.username.$model"
                />
              </div>

              <div v-if="v$.form.username.$error">
                <div
                  v-if="v$.form.username.required.$invalid"
                  class="ui label red floated left"
                  style="margin-top: 10px"
                >
                  username is required
                </div>

                <div
                  v-if="v$.form.username.min.$invalid"
                  class="ui label red floated left"
                  style="margin-top: 10px"
                >
                  username at least must be greater than 4 characters.
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
              <div v-if="v$.form.password.$error">
                <div
                  v-if="v$.form.password.required.$invalid"
                  class="ui label red floated left"
                  style="margin-top: 10px"
                >
                  password is required
                </div>

                <div
                  v-if="v$.form.password.min.$invalid"
                  class="ui label red floated left"
                  style="margin-top: 10px"
                >
                  password at least must be greater than 6 characters.
                </div>
              </div>
            </div>
            <div class="column sixteen wide">
              <p class="heading">
                by registering you confirm our privacy policy.
              </p>
              <div class="ui checkbox">
                <input type="checkbox" name="example" />
                <label>i confirm privacy policy</label>
              </div>
            </div>

            <div class="column sixteen wide">
              <button
                class="primary fluid large ui button"
                :disabled="v$.form.$invalid"
                type="submit"
              >
                register
              </button>
            </div>
            <div class="column sixteen wide">(c) mert genç</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/runtime-core';
import { email, required, minLength, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default defineComponent({
  name: 'SignUp',
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
        username: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log('eee', e);
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
        username: {
          required,
          min: minLength(4),
        },
      },
    };
  },
  beforeMount() {
    // this.$ref.email.focus();
    console.log('ulaa');
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
  display: flex;
  background: rgb(212, 174, 238);
  background: linear-gradient(
    90deg,
    rgba(212, 174, 238, 1) 14%,
    rgba(153, 210, 184, 0.68531162464986) 88%
  );

  @media screen and (max-width: $small) {
    padding: 24px;
  }

  .box {
    background-color: red;
  }
}
</style>
