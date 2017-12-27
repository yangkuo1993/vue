// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import './filter'
import mock from './api/login/mock'
import FastClick from 'fastclick'
import 'amfe-flexible'
import VueVideoPlayer from 'vue-video-player'
FastClick.attach(document.body)
Vue.use(mock)
Vue.use(VueVideoPlayer)
import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
