const state = {
  user: null,
};

const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

const actions = {
  login(ctx, { email, password }) {
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
      .then(user => ctx.commit('SET_USER', user));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
