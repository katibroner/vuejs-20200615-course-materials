import Vue from '/vendor/vue.esm.browser.js';


const App = {
  template: `<main style="text-align: center">
  <button @click="updateItemByKey">updateItemByKey</button>
  <button @click="updateItemWithSplice">updateItemWithSplice</button>
  <button @click="updateItemValueByArrayKey">updateItemValueByArrayKey</button>
  <button @click="updateItemWithSet">updateItemWithSet</button>
  <button @click="addNewKey">addNewKey</button>
  <button @click="addNewKeyWithAssign">addNewKeyWithAssign</button>
  <button @click="addNewKeyWithSet">addNewKeyWithSet</button>
  <p v-for="item in items" :key="item.id">{{ item }}</p>
</main>`,

  data() {
    return {
      items: [
        {
          id: Math.random(),
          value: 'a',
        },
        {
          id: Math.random(),
          value: 'b',
        }
      ]
    };
  },

  methods: {
    updateItemByKey() {
      const newValue = {
        id: Math.random(),
        value: this.items[0].value + '!',
      };
      this.items[0] = newValue;
    },

    updateItemWithSplice() {
      const newValue = {
        id: Math.random(),
        value: this.items[0].value + '!',
      };
      this.items.splice(0, 1, newValue);
    },

    updateItemValueByArrayKey() {
      this.items[0].value += '!';
    },

    updateItemWithSet() {
      // Vue.set === this.$set
      const newValue = {
        id: Math.random(),
        value: this.items[0].value + '!',
      };
      this.$set(this.items, 0, newValue);
    },

    addNewKey() {
      this.items[0].newKey = 'New Value';
    },

    addNewKeyWithAssign() {
      this.items.splice(0, 1, {
        ...this.items[0],
        newKey: 'New Value 1',
      });
    },

    addNewKeyWithSet() {
      const obj = this.items[0];
      this.$set(obj, 'newKey', 'New Value')
      // this.$set(this.items[0], 'newKey', 'New Value') -- не сработает
    },
  },
};

const app = new Vue({
  render: h => h(App),
}).$mount('#app');
