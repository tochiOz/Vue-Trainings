import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import singleAnimation from './views/animations/singleAnimation.vue'
import multipleAnimation from './views/animations/multipleAnimation.vue'
import jsAnimation from './views/animations/jsAnimation.vue'
import groupAnimation from './views/animations/groupAnimation.vue'
import http from './views/http/http.vue'
import Display from './views/store/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/animation',
      name: 'singleAnimation',
      component: singleAnimation
    },
    {
      path: '/multipleAnimation',
      name: 'multipleAnimation',
      component: multipleAnimation
    },
    {
      path: '/jsAnimation',
      name: 'jsAnimation',
      component: jsAnimation
    },
    {
      path: '/http',
      name: 'http',
      component: http
    },
    {
      path: '/store/display',
      name: 'index',
      component: Display
    },
    {
      path: '/groupAnimations',
      name: 'groupAnimation',
      component: groupAnimation
    }
  ]
})
