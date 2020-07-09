<template>
  <div class="simple-card">
    <button @click="localToast">localToast</button>
    <portal to="root-end">
      <app-toast ref="localToaster" />
    </portal>
  </div>
</template>

<script>
import AppToast from './AppToast';

export default {
  name: 'SamplePage',

  components: { AppToast },

  data() {
    return {
      localToaster: null,
    };
  },

  mounted() {
    // Known Caveats | $refs
    // https://portal-vue.linusb.org/guide/caveats.html#refs
    this.$nextTick(() => {
      this.$nextTick(() => {
        this.localToaster = this.$refs.localToaster;
      });
    });
  },

  methods: {
    localToast() {
      this.localToaster.success('Local Toast');
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
