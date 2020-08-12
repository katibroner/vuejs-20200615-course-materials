import Vue from '/vendor/vue.esm.browser.js';

const ListView = {
  template: `<ul>
  <li v-for="item in items">
    {{ item }}
  </li>
</ul>`,

  props: {
    items: Array,
  },
};

const ListContainer = {
  template: `<list-view :items="items"/>`,

  components: { ListView },

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
};


const App = {
  template: `<div>
  <list-container />
</div>`,

  components: {
    ListContainer,
  },
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
