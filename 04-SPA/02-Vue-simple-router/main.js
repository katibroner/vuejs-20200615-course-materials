import Vue from './vue.esm.browser.js';

const PageA = {
  template: `<div>Page A</div>`,
};

const PageB = {
  template: `<div>Page B</div>`,
};

const PageC = {
  template: `<div>Page C</div>`,
};

const App = {
  template: `
<main style="text-align: center">
  <nav>
    <button @click="go('/A')">Page A</button> |
    <button @click="go('/B')">Page B</button> |
    <button @click="go('/C')">Page C</button> |
  </nav>
  <hr>
  <page-a v-if="current === '/A'"/>
  <page-b v-else-if="current === '/B'"/>
  <page-c v-else-if="current === '/C'"/>
  <div v-else>404 - Not Found</div>
</main>
`,

  components: {
    PageA, PageB, PageC,
  },

  data() {
    return {
      current: null,
    };
  },

  mounted() {
    this.current = location.pathname;
  },

  methods: {
    go(page) {
      this.current = page;
      window.history.pushState(null, 'Title', this.current);
    }
  }
};

const app = new Vue({
  render: h => h(App),
}).$mount('#app');
