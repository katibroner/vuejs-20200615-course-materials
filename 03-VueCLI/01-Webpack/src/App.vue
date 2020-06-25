<template>
  <div>
    <button>Обычная кнопка</button>
    <alert-button text="Alert text">
      <app-text text="Alert" />
      Button
    </alert-button>
  </div>
</template>

<script>
import AlertButton from "./components/AlertButton.vue";
import AppText from "./components/AppText.vue";

export default {
  name: "App.vue",
  components: {AppText, AlertButton },
}
</script>

<style scoped>
</style>
