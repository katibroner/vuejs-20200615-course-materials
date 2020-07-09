<template>
  <div>
    <slot />
    <app-toast ref="toaster" />
  </div>
</template>

<script>
import AppToast from './AppToast';
export default {
  name: 'ToasterProvider',

  components: { AppToast },

  provide() {
    return {
      toaster: {
        success: this.success,
        error: this.error,
      },
    };
  },

  methods: {
    success(message) {
      this.$refs.toaster.success(message);
    },

    error(message) {
      this.$refs.toaster.error(message);
    },
  },
};
</script>

<style scoped></style>
