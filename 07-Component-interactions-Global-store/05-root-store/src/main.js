import Vue from 'vue';
import App from './App.vue';
import '@/assets/styles/index.css';

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      user: null,
    };
  },

  computed: {
    isAuthenticated() {
      return !!this.user;
    },
  },

  methods: {
    setUser(user) {
      this.user = user;
    },

    login(email, password) {
      return fetch(`${process.env.VUE_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then(res => {
              throw new Error(res.message);
            });
          }
        })
        .then(user => this.setUser(user));
    },
  },

  render: h => h(App),
}).$mount('#app');
