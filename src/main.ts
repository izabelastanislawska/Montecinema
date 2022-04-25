import Vue from 'vue';
import router from '@/router/routes';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import Notofications from 'vue-notification';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Notofications, {componentName: 'notifications'});
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
