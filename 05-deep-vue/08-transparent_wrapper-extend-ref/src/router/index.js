import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/SamplePage'),
    },
  ],
});
