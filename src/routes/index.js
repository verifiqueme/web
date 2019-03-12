import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '../components/Inicio'
import Sobre from "../components/Sobre";
import Duvidas from "../components/Duvidas";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Inicio', component: Inicio },
    { path: '/sobre', name: 'Sobre', component: Sobre },
    { path: '/duvidas', name: 'Resultados e funcionamento', component: Duvidas }
  ]
})
