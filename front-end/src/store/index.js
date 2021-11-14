import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      state.count = payload;
    },
  },
  actions: {
    increment(context) {
      context.commit('INCREMENT', 3);
    },
  },
  modules: {},
});
