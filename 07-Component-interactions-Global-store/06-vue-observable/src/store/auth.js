import Vue from 'vue';

export const AuthStore = {
  state: Vue.observable({
    user: null,
  }),

  getters: {
    isAuthenticated() {
      return !!AuthStore.state.user;
    },
  },

  mutations: {
    setUser(user) {
      AuthStore.state.user = user;
    },
  },

  actions: {
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
        .then(user => AuthStore.mutations.setUser(user));
    },
  },
};
