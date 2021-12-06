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
        <form @submit="handleSubmit">
          <div class="ui six column stackable center aligned page grid">
            <div class="column sixteen wide">
              <div
                v-bind:class="{ error: errors.email }"
                class="ui fluid labeled input large"
              >
                <div class="ui label">e-mail</div>
                <input
                  type="text"
                  placeholder="email"
                  @change="handleChange"
                  @blur="handleBlur"
                  ref="email"
                  name="email"
                />
              </div>
            </div>

            <div class="column sixteen wide">
              <div
                v-bind:class="{ error: errors.email }"
                class="ui fluid labeled input large"
              >
                <div class="ui label">username</div>
                <input
                  type="text"
                  placeholder="username"
                  @change="handleChange"
                  @blur="handleBlur"
                  ref="username"
                  name="username"
                />
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
              <p class="heading">
                by registering you confirm our privacy policy.
              </p>
              <div class="ui checkbox">
                <input type="checkbox" name="example" />
                <label>i confirm privacy policy</label>
              </div>
            </div>

            <div class="column sixteen wide">
              <button class="primary fluid large ui button" type="submit">
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
import { defineComponent, ref } from '@vue/runtime-core';
export default defineComponent({
  name: 'SignUp',
  components: {
    // CustomInput,
  },
  props: ['click'],
  setup() {
    const EMAIL_REGEX =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const state = ref({
      email: '',
      username: '',
      password: '',
    });

    const errors = ref({
      email: '',
      username: '',
      password: '',
    });

    const handleChange = (e) => {
      state.value = {
        ...state.value,
        [e.target.name]: e.target.value,
      };
    };

    const handleBlur = () => {
      if (
        state.value.email.trim().length === 0 &&
        state.value.password.trim().length === 0 &&
        state.value.username.trim().length === 0
      ) {
        errors.value = {
          ...errors.value,
          email: 'email is required',
          password: 'password is required',
          username: 'username is required',
        };
        return false;
      } else if (!EMAIL_REGEX.test(state.value.email)) {
        errors.value = {
          ...errors.value,
          email: 'please provide valid e-mail address',
        };
        return false;
      } else if (errors.value.password.length < 6) {
        errors.value = {
          ...errors.value,
          password: 'password must be at least 6 characters',
        };
        return false;
      } else if (errors.value.username.length < 5) {
        errors.value = {
          ...errors.value,
          username: 'username must be at least 5 characters',
        };
        return false;
      } else {
        errors.value = {
          email: '',
          password: '',
          username: '',
        };
        return true;
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (handleBlur()) {
        console.log('is valid!');
      }
    };

    return {
      handleChange,
      errors,
      handleBlur,
      handleSubmit,
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
