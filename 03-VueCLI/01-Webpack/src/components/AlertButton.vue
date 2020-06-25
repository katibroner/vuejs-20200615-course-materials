<template>
  <button @click="makeAlert">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AlertButton",

  props: ['text'],

  methods: {
    makeAlert() {
      alert(this.text);
    },
  },

};
</script>

<style scoped>

button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4c6bb6;
  text-align: center;
  border: 4px solid #4c6bb6;
  transition: .2s all;
  outline: none;
  box-shadow: none;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
}

button:hover {
  border-color: #b8c5e2;
}

/* Работает, так как scoped стили действуют на корневой элемент дочерних компонентов */
button .root{
  font-style: italic;
}

/* Не работает, scoped стили не действуют на содержимое других компонентов */
button .deep{
  text-decoration: underline;
}

/* Работает, используется >>> */
button >>> .deep{
  text-transform: uppercase;
}
</style>
