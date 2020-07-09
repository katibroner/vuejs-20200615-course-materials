<template>
  <div class="simple-card">
    <app-toast ref="localToaster" />
  </div>
</template>

<script>
import AppToast from './AppToast';

export default {
  name: 'SamplePage',

  components: { AppToast },

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
