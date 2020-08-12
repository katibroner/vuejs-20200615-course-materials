<template>
  <div class="wrapper page container">
    <login-page v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage';
import { AuthStore } from './store/auth';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  computed: {
    user() {
      return AuthStore.state.user;
    },

    isAuthenticated() {
      return AuthStore.getters.isAuthenticated();
    },
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
