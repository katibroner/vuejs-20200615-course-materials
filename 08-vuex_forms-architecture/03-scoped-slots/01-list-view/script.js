import Vue from '/vendor/vue.esm.browser.js';

const ListView = {
  template: `<div>
  <form @submit.prevent="insert">
    <input v-model="newItem" placeholder="New"> <button>+</button>
  </form>
  <ul>
    <li v-for="(item, index) in items_">
      <span>{{ item }}</span>
      <button @click="remove(index)">x</button>
    </li>
  </ul>
</div>`,
  props: {
    items: Array,
  },

  model: {
    prop: 'items',
    event: 'change',
  },

  data() {
    return {
      items_: null,
      newItem: '',
    };
  },

  watch: {
    items: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.items_ = newValue;
      },
    },
  },

  methods: {
    insert() {
      if (this.newItem) {
        this.items_.push(this.newItem);
        this.$emit('change', [...this.items_]);
        this.newItem = '';
      }
    },

    remove(idx) {
      this.items_.splice(idx, 1);
      this.$emit('change', [...this.items_]);
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
