<template>
  <form @submit.prevent="submit">
    <p>
      <input v-model="email" placeholder="email" />
    </p>
    <p>
      <input v-model="password" type="password" placeholder="password" />
    </p>
    <p>
      <button>Submit</button>
    </p>
  </form>
</template>

<script>
import { AuthStore } from '../store/auth';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  computed: {
    isAuthenticated() {
      return AuthStore.getters.isAuthenticated;
    },
  },

  methods: {
    submit() {
      AuthStore.actions
        .login(this.email, this.password)
        .catch(err => alert(err));
    },
  },
};
</script>

<style scoped></style>
