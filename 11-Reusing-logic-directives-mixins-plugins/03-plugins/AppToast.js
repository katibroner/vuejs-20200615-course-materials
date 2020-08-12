export default {
  template: `<div class="toasts">
  <div v-if="toast" class="toast" :class="toast.class">
    <span>{{ toast.message }}</span>
  </div>
</div>`,

  name: 'AppToast',

  data() {
    return {
      toast: null,
    };
  },

  methods: {
    error(message) {
      this._show('error', message);
    },

    success(message) {
      this._show('success', message);
    },

    _show(style, message) {
      setTimeout(() => {
        this.toast = null;
      }, 2000);

      const icons = {
        success: 'check-circle',
        error: 'alert-circle',
      };

      this.toast = {
        message,
        style,
        class: `toast_${style}`,
      };
    },
  },
};
