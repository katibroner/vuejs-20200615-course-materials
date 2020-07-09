<template>
  <div class="wrapper page container">
    <!--<app-toast />-->
    <sample-page />
  </div>
</template>

<script>
import AppToast from './components/AppToast';
import { ToastEventBus } from './event-busses/ToastEventBus';
import SamplePage from './components/SamplePage';
import { ToastEmitter } from './emitters/ToastEmitter';

export default {
  name: 'App',

  components: {
    SamplePage,
    AppToast,
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
