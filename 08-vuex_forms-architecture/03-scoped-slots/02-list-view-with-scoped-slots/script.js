import Vue from '/vendor/vue.esm.browser.js';

const ListView = {
  template: `<ul>
  <li v-for="(item, idx) in items">
    <span>{{ item }}</span>
    <button @click="removeHandler(idx)">x</button>
  </li>
</ul>`,
  props: {
    items: Array,
  },

  model: {
    prop: 'items',
    event: 'change',
  },

  methods: {
    removeHandler(idx) {
      this.items.splice(idx, 1)
      this.$emit('change', [...this.items]);
    },
  },
};

const App = {
  template: `<div>
  <list-view v-model="list" />
</div>`,

  components: {
    ListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
}

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
