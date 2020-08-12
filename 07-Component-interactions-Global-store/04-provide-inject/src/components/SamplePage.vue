<template>
  <div class="simple-card">
    <button @click="injectedToast">injectedToast</button>
  </div>
</template>

<script>
export default {
  name: 'SamplePage',

  methods: {
    injectedToast() {},
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
