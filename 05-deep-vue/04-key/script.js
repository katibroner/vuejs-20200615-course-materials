import Vue from '/vendor/vue.esm.browser.js';

const genId = () => Math.random().toFixed(3).substr(2, 3);

const ListItem = {
  template: '<div> {{ value }}</div>',
  // template: '<div><input :value="value"></div>',
  props: ['item'],
  data() {
    return {
      value: this.item.value,
    };
  },
};

const App = {
  template: `<div>
  <div style="display: flex">
      <fieldset>
        <legend>Without key</legend>
        <list-item v-for="item in list" :item="item"></list-item>
      </fieldset>
      <fieldset>
        <legend>With INDEX key</legend>
        <list-item v-for="(item, index) in list" :key="index" :item="item"></list-item>
      </fieldset>
      <fieldset>
        <legend>With REAL key</legend>
        <list-item v-for="(item, index) in list" :key="item.id" :item="item"></list-item>
      </fieldset>
    </div>
    <button type="button" @click="rotateList">Rotate List 1</button>
    <button type="button" @click="unshiftList">Unshift List 1</button>
</div>`,

  components: {
    ListItem,
  },

  data() {
    return {
      list: [
        { id: genId(), value: 'a' },
        { id: genId(), value: 'b' },
        { id: genId(), value: 'c' },
      ],
    }
  },

  methods: {
    rotateList() {
      this.list = this.list.slice(1).concat(this.list[0]);
    },

    unshiftList() {
      this.list.unshift({ id: genId(), value: 'NEW' });
    },
  },
}

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
