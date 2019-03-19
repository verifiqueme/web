// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes'
import Buefy from 'buefy';
import VueTimers from 'vue-timers'
import VueAnimateNumber from 'vue-animate-number'
import 'buefy/dist/buefy.css';


// Ext
Vue.use(VueTimers);
Vue.use(Buefy);
Vue.use(VueAnimateNumber);
Vue.config.productionTip = false;
if (webpackHotUpdate) {
  Vue.prototype.server = 'http://localhost:8888'
}else{
  Vue.prototype.server = 'https://srv2.verifique.me'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
