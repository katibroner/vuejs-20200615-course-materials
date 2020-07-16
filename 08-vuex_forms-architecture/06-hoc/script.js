import Vue from '/vendor/vue.esm.browser.js';

const VButton = {
  name: 'VButton',

  template: `<button type="button" v-on="$listeners"><slot /></button>`,
};

const VInputButton = {
  name: 'VButton',

  template: `<input type="button" :value="text" v-on="$listeners" />`,

  props: ['text'],
};

const App = {
  template: `<div>
  <p><v-button @click="clickHandler">{{ count }}</v-button></p>
  <p><v-input-button @click="clickHandler" :text="count"/></p>
</div>`,

  components: {
    VButton,
    VInputButton,
  },

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    clickHandler() {
      this.count += 1;
    },
  },
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
