import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import {
  routes
} from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

// Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app');