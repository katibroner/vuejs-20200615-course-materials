<template>
  <div class="wrapper page container">
    <sample-page />
  </div>
</template>

<script>
import SamplePage from './components/SamplePage';

export default {
  name: 'App',

  components: {
    SamplePage,
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
