import Vue from '/vendor/vue.esm.browser.js';

const RenderlessListView = {
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

  render(h) {
    return this.$scopedSlots.default({
      items: this.items,
      newItem: this.newItem,
      methods: {
        insert: this.insert,
        setNewItem: this.setNewItem,
        remove: this.remove,
      },
    });
  },
};


const UlListView = {
  template: `<renderless-list-view :items="list" @change="$emit('change', $event)">
  <template #default="{ methods, items, newItem }">
    <div>
      <form @submit.prevent="methods.insert">
        <input :value="newItem" @input="methods.setNewItem($event.target.value)" placeholder="New"> <button>+</button>
      </form>
      <ul>
        <li v-for="(item, idx) in items">
          <span>{{ item }}</span>
          <button @click="methods.remove(idx)">x</button>
        </li>
      </ul>
    </div>
  </template>
</renderless-list-view>`,

  components: {
    RenderlessListView,
  },

  props: {
    list: Array,
  },

  model: {
    prop: 'list',
    event: 'change',
  },
};

const LinkListView = {
  template: `<renderless-list-view :items="list" @change="$emit('change', $event)">
  <template #default="{ methods, items }">
    <div>
      <div>
        <a v-for="(item, idx) in items" href="#" @click="methods.remove(idx)">
          {{ item }}
        </a>
      </div>
    </div>
  </template>
</renderless-list-view>`,

  components: {
    RenderlessListView,
  },

  props: {
    list: Array,
  },

  model: {
    prop: 'list',
    event: 'change',
  },
};

const App = {
  template: `<div>
  <ul-list-view v-model="list" />
  <hr>
  <link-list-view v-model="list" />
</div>`,

  components: {
    UlListView,
    LinkListView,
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
