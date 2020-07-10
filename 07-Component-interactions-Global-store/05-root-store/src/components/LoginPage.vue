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
      return this.$root.isAuthenticated;
    },
  },

  methods: {
    submit() {
      this.$root.login(this.email, this.password).catch(err => alert(err));
    },
  },
};
</script>

<style scoped></style>
