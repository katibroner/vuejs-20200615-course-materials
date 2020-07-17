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

const withLogger = (WrappedComponent) => ({
  template: `<wrapped-component @click="clickHandler" v-on="$listeners" v-bind="$attrs"><slot /></wrapped-component>`,

  components: {
    WrappedComponent,
  },

  methods: {
    clickHandler() {
      console.log('Button was clicked');
    },
  }
});

const VLoggerButton = withLogger(VButton);
const VLoggerInputButton = withLogger(VInputButton);

const App = {
  template: `<div>
  <p><v-logger-button @click="clickHandler">{{ count }}</v-logger-button></p>
  <p><v-logger-input-button @click="clickHandler" :text="count"/></p>
</div>`,

  components: {
    VLoggerButton,
    VLoggerInputButton,
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
