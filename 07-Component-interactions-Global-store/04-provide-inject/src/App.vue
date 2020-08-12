<template>
  <toaster-provider>
    <div class="wrapper page container">
      <sample-page />
    </div>
  </toaster-provider>
</template>

<script>
import SamplePage from './components/SamplePage';
import ToasterProvider from './components/ToasterProvider';

export default {
  name: 'App',

  components: {
    ToasterProvider,
    SamplePage,
  },

  provide() {
    return {
      config: {
        API_URL: process.env.VUE_APP_API_URL,
      },
    };
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
