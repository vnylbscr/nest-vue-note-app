import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';
import {
  CThemeProvider,
  CColorModeProvider,
  CBox,
  CReset,
} from '@chakra-ui/vue';

const app = createApp({
  render(h) {
    return h(CThemeProvider, [
      h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])]),
    ]);
  },
}).$mount('#app');

app.use(store);
