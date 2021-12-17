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
    notes: [],
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
    addNote(state, { note }) {
      state.notes.push(note);
    },
    deleteNote(state, { noteId }) {
      state.notes = state.notes.filter((item) => item.id !== noteId);
    },
    updateNote(state, { note }) {
      state.notes = state.notes.map((item) =>
        item.id === note.id ? { ...item, ...note } : item,
      );
    },
  },
  actions: {
    login: async (context, { payload: { user, token } }) => {
      context.commit('login', {
        user,
        token,
      });
    },
    register: async (context, { payload: { user, token } }) => {
      context.commit('register', {
        user,
        token,
      });
    },
    signOut: async (context) => {
      context.commit('signOut');
    },
    addNote: async (context, { payload }) => {
      const res = await axios.get(`${API_URL}/note`, {
        ...payload,
      });

      if (res.status === 200) {
        context.commit('addNote', res.data);
      }
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
