// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes'
import Buefy from 'buefy';
import VueTimers from 'vue-timers'

import 'buefy/dist/buefy.css';


// Ext
Vue.use(VueTimers);
Vue.use(Buefy);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
