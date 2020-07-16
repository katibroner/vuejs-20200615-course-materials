import Vue from '/vendor/vue.esm.browser.js';

const ListComponent = {
  template: `<ul>
  <li v-for="item in items">
    {{ item }}
  </li>
</ul>`,

  data() {
    return {
      items: [],
    };
  },

  mounted() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      this.items = [1, 2, 3];
    },
  },
}


const App = {
  template: `<div>
  <list-component />
</div>`,

  components: {
    ListComponent,
  },
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
