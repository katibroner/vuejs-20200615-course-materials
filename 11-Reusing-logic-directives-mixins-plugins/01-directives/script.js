import Vue from '/vendor/vue.esm.browser.js';

const App = {
  template: `<div>
  <input value="Text Value" />
</div>`,
};

// или зарегистрировать глобально
// Vue.directive('select-on-focus', selectOnFocus);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  render: h => h(App),
}).$mount('#app');
