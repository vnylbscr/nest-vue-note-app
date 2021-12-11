import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import axios from 'axios';
import { API_URL } from '../lib/config';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    user: null,
    token: null,
    count: 0,
  },
  mutations: {
    register(state, { user, token }) {
      state.user = user;
      state.token = token;
    },
    login(state, { user, token }) {
      state.user = user;
      state.token = token;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
    },
    increment(state, payload) {
      console.log('action payload', payload);
      state.count++;
    },
  },
  actions: {
    login: async (context, { payload }) => {
      const user = 'merto';
      const token = 'token';

      console.log('payload action', payload);

      axios.get(API_URL);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
