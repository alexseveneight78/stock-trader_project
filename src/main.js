import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store/store'

import { routes } from './routes';

Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString(); 
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})