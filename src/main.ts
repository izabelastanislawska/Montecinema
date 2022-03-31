import Vue from 'vue';
import router from '@/router/routes';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import Notofications from 'vue-notification';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Notofications, {componentName: 'AppNotifications'});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
