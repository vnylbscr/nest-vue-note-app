import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    user: {},
    count: 0,
  },
  mutations: {
    personLogin(state, action) {
      state.user = action.payload;
    },
    //eslint-disable-next-line
    personSignOut(state, action) {
      state.user = {};
    },
    increment(state, payload) {
      console.log('action payload', payload);
      state.count++;
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
});
