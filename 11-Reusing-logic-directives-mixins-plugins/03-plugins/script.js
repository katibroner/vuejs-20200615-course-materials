import Vue from '/vendor/vue.esm.browser.js';

const App = {
  template: `<div>
  <button @click="toast">Toast!</button>
</div>`,

  methods: {
    toast() {},
  },
};

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  render: h => h(App),
}).$mount('#app');
