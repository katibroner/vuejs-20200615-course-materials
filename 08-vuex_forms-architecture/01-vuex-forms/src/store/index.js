import Vue from 'vue';
import Vuex from 'vuex';
import forms from './modules/forms';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    forms,
  },
});
