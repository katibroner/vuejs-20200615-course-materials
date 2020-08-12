<template>
  <div class="wrapper page container">
    <app-toast ref="rootToaster" />
    <app-toast ref="busToaster" />
    <app-toast ref="emitterToaster" />
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

  mounted() {
    this.$root.$on('toaster:success', message => {
      this.$refs.rootToaster.success(message);
    });

    ToastEventBus.$on('success', message => {
      this.$refs.busToaster.success(message);
    });

    ToastEmitter.on('success', message => {
      this.$refs.emitterToaster.success(message);
    });
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
