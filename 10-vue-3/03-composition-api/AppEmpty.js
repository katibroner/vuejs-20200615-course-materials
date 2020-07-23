import { defineComponent } from '/vendor/vue.esm-browser.js';

const template = `
<div class="meetup__empty">
  <slot>Нет данных</slot>
</div>
`;

export const AppEmpty = defineComponent({
  template,
});
