import Vue from '/vendor/vue.esm.browser.js';

const ListView = {
  template: `<div>
  <slot name="insert-form" v-bind="{ insert, newItem, setNewItem }">
    <form @submit.prevent="insert">
      <input v-model="newItem" placeholder="New"> <button>+</button>
    </form>
  </slot>
  <ul>
    <li v-for="(item, index) in items_">
      <slot :item="item">
          <span>{{ item }}</span>
      </slot>
      <slot name="remove-button" :remove="remove">
        <button @click="remove(idx)">x</button>
      </slot>
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
    setNewItem(value) {
      this.newItem = value;
    },

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

  <hr>

  <list-view v-model="list">
    <template #insert-form="scope">
      <input :value="scope.newItem" @input="scope.setNewItem($event.target.value)">
      <a href="#" @click="scope.insert">Add</a>
    </template>
    <template #default="scope">
      <b>{{ scope.item }}</b>
    </template>
    <template #remove-button="{ remove }">
      <a href="#" @click="remove">Delete</a>
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
