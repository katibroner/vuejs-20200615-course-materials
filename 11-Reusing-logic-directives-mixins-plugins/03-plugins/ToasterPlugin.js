import Vue from '/vendor/vue.esm.browser.js';
import AppToast from './AppToast.js';

export const ToasterPlugin = {
  install() {
    // Vue.mixin(SomeMixin);
    // Vue.component(BaseButton);
    // Vue.directive(selectOnFocus);
    const container = document.createElement('div');
    document.body.appendChild(container);
    Vue.prototype.$toaster = new Vue(AppToast).$mount(container);
  },
};
