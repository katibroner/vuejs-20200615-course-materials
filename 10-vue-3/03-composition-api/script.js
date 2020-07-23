import { createApp } from "/vendor/vue.esm-browser.js";
import { MeetupsPage } from "./MeetupsPage.js";

const app = createApp({
  template: `<meetups-page />`,

  components: {
    MeetupsPage
  }
}).mount("#app");

app.mount('#app');
