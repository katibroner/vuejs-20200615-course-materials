const handler = $event => {
  $event.currentTarget.setSelectionRange(0, -1);
};

export const selectOnFocus = {
  bind(el) {
    el.addEventListener('focus', handler);
  },
  unbind(el) {
    el.removeEventListener('focus', handler);
  },
};
