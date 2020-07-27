import Vue from '/vendor/vue.esm.browser.js';
import { ToasterPlugin } from './ToasterPlugin.js';

Vue.use(ToasterPlugin);

const App = {
  template: `<div>
  <button @click="toast">Toast!</button>
</div>`,

  methods: {
    toast() {
      this.$toaster.success('Toast!');
    },
  },
};

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  render: h => h(App),
}).$mount('#app');
