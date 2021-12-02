import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    personLogin(state, action) {
      state.user = action.payload;
    },
    //eslint-disable-next-line
    personSignOut(state, action) {
      state.user = {};
    },
  },
  actions: {},
  modules: {},
});
