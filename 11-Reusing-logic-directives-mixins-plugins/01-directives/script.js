import Vue from '/vendor/vue.esm.browser.js';
import { selectOnFocus } from './directives/select-on-focus.js';

const App = {
  template: `<div>
  <input value="Text Value" @focus="selectOnFocus" />
  <hr>
  <input value="Text Value With Directive" v-select-on-focus />
</div>`,

  directives: { selectOnFocus },

  methods: {
    selectOnFocus($event) {
      $event.currentTarget.setSelectionRange(0, -1);
    },
  },
};

// или зарегистрировать глобально
// Vue.directive('select-on-focus', selectOnFocus);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  render: h => h(App),
}).$mount('#app');
