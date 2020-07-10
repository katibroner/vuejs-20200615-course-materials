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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  computed: {
    ...mapGetters('auth', {
      isAuthenticated: 'isAuthenticated',
    }),
  },

  methods: {
    ...mapActions('auth', {
      login: 'login',
    }),

    submit() {
      this.login({ email: this.email, password: this.password }).catch(err =>
        alert(err),
      );
    },
  },
};
</script>

<style scoped></style>
