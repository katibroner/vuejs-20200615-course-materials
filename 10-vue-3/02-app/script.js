import { createApp, defineComponent } from "/vendor/vue.esm-browser.js";

const InputComponent = defineComponent({
  // 2 корневых элемента, больше нет правила на 1 root
  // Но в этом случае требуется явно указывать, куда попадут атрибуты
  // Кстати, в них теперь попадает всё, что не является параметрами или событиями компонента
  // включая старый $listeners
  template: `<label> <slot /> </label>
<input v-bind="$attr"
       :value="value"
       @input="$emit('update:value', $event.target.value)" />`,
  inheritAttrs: false,

  // Либо можно было назвать параметр modelValue,
  // тогда можно было бы использовать v-model без аргумента :value
  props: ["value"],

  emits: ["update:value"]

  /*
  Больше не нужен:
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  }*/
});

const app = createApp({
  template: `<main>
  <input-component v-model:value="value" placeholder="input">Label</input-component>
  <hr>
  {{ value }}
</main>`,

  // components: { InputComponent }, - локальная регистрация тоже работает

  data() {
    return {
      value: "Value"
    };
  }
});

// Глобальная регистрация теперь действует в рамках одного vue приложения, а не всего Vue
app.component("input-component", InputComponent);

app.mount("#app");
