import Vue from '/vendor/vue.esm.browser.js';

const MeetupsList = {
  template: `<div>
  <h2>Список митапов</h2>
  <p>Всего митапов: {{ meetups.length }}</p>
</div>`,

  props: {
    meetups: Array,
  },
};

const MeetupsCalendar = {
  template: `<div>
  <h2>Календарь митапов</h2>
  <h3>Месяц: {{ month }} <button @click="nextMonth">Следующий месяц</button></h3>
  <p>Всего митапов: {{ meetups.length }}</p>
</div>`,

  props: {
    meetups: Array,
  },

  data() {
    return {
      month: 1,
    };
  },

  methods: {
    nextMonth() {
      this.month += 1;
    },
  },
};

const App = {
  template: `<div>
    <p><label><input v-model="view" type="radio" value="list"> Список</label></p>
    <p><label><input v-model="view" type="radio" value="calendar"> Календарь</label></p>
    <meetups-list v-if="view === 'list'" :meetups="meetups" />
    <meetups-calendar v-else :meetups="meetups" />
</div>`,

  components: {
    MeetupsList,
    MeetupsCalendar,
  },

  data() {
    return {
      view: 'list',
      meetups: ['a', 'b'],
    };
  },
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');