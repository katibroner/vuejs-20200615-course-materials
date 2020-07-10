<template>
  <div class="simple-card">
    <app-toast ref="localToaster" />
    <button @click="localToast">localToast</button>
    <button @click="rootToast">rootToast</button>
    <button @click="busToast">busToast</button>
    <button @click="emitterToast">emitterToast</button>
  </div>
</template>

<script>
import AppToast from './AppToast';
import { ToastEventBus } from '../event-busses/ToastEventBus';
import { ToastEmitter } from '../emitters/ToastEmitter';

export default {
  name: 'SamplePage',

  components: { AppToast },

  methods: {
    localToast() {
      this.$refs.localToaster.success('Local Toast');
    },

    rootToast() {
      this.$root.$emit('toaster:success', 'Root Toast');
    },

    busToast() {
      ToastEventBus.$emit('success', 'Vue Event Bus Toast');
    },

    emitterToast() {
      ToastEmitter.emit('success', 'Mitt Emitter Toast');
    },
  },
};
</script>

<style scoped>
.simple-card {
  position: relative;
  border: 1px solid #333;
  background-color: #efefef;
  padding: 15px;
  width: 500px;
  min-height: 500px;
}
</style>
