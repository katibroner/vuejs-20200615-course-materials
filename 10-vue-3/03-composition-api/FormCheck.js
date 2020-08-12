import { defineComponent } from "/vendor/vue.esm-browser.js";

const template = `
<div class="form-check">
  <div v-for="option in options" :key="option.value" class="form-check__group">
    <input
      class="form-check__input"
      type="radio"
      name="date"
      :value="option.value"
      :checked="option.value === modelValue"
      @input="$emit('update:modelValue', option.value)"
    />
    <label class="form-check__label">{{ option.text }}</label>
  </div>
</div>
`;

export const FormCheck = defineComponent({
  template,

  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String
    }
  },

  emits: ["update:modelValue"]
});
