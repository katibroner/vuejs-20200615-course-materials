import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import forms from './modules/forms';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['forms'],
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    forms,
  },
  plugins: [vuexLocal.plugin],
});
