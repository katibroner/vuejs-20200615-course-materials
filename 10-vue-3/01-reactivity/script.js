import {
  reactive,
  ref,
  toRefs,
  computed,
  watchEffect
} from "/vendor/vue.esm-browser.js";

const state = reactive({
  items: ["a", "b", "c"],
  set: new Set(),
  map: new Map()
  // date: new Date() -- не реактивно (если использовать мутирующие методы)
});

state.items.push("d");

const currentItemIndex = ref(0);

currentItemIndex.value = 1;

const currentItem = computed(() => state.items[currentItemIndex.value]);

watchEffect(() => {
  console.log("State Keys:", Object.keys(state));
  console.log("Items Length:", state.items.length);
  console.log("Items:", toRefs(state.items));
  console.log("Current Item Index:", currentItemIndex.value);
  console.log("Current Item:", currentItem.value);
  console.log("Set:", Array.from(state.set));
});

window.state = state;
window.currentItemIndex = currentItemIndex;
window.currentItem = currentItem;

/*
Теперь можно изменять массив по индексу и добавлять новые поля в объект
Работает:
state.items[currentItemIndex] = 'New Value';
state.newKey = 'newValue';
 */
