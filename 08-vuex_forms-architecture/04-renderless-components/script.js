import Vue from '/vendor/vue.esm.browser.js';

const ListView = {
  template: `<ul>
  <li v-for="(item, idx) in items">
    <slot :item="item">
        <span>{{ item }}</span>
    </slot>
    <slot name="remove-button" :remove="removeHandler">
      <button @click="removeHandler(idx)">x</button>
    </slot>
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
      this.items.splice(idx, 1);
      this.$emit('change', [...this.items]);
    },
  },
};

const App = {
  template: `<div>
  <list-view v-model="list">
    <template #default="scope">
      <b>{{ scope.item }}</b>
    </template>
    <template #remove-button="scope">
      <a href="#" @click="scope.remove">Delete</a>
    </template>
  </list-view>
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
