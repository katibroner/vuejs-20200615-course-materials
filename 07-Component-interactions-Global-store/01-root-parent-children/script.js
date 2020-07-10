import Vue from '/vendor/vue.esm.browser.js';

const ComponentC1 = {
  template: `<a>Link1</a>`,

  data() {
    return {
      value: 'C1',
    };
  },
};

const ComponentC2 = {
  template: `<a>Link2</a>`,

  data() {
    return {
      value: 'C1',
    };
  },
};

const ComponentB = {
  template: `
<nav>
  <component-c1 />
  <component-c2 />
  <p>Parent value = {{ $parent.value }} ($parent.value)</p>
  <p>Root value = {{ $root.value }} ($root.value)</p>
  <p v-for="(child, i) in $children">Child value = {{ child.value }} ($children[i].value)</p>
</nav>`,

  components: { ComponentC1, ComponentC2 },

  data() {
    return {
      value: 'B',
    };
  },

  mounted() {
    this.$forceUpdate();
  }
};

const ComponentA = {
  template: `<header><component-b /></header>`,

  components: { ComponentB },

  data() {
    return {
      value: 'A',
    };
  },


};

const App = {
  name: 'App',

  template: `<main id="app"><component-a /></main>`,

  components: { ComponentA },

  data() {
    return {
      value: 'App',
    };
  },
};

const app = new Vue({
  render: h => h(App),
}).$mount('#app');
