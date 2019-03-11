import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    fb.initializeApp({
      apiKey: 'AIzaSyDqtXVAo8XqUpl0Gwo9wpj5nBeGAYRbn6I',
      authDomain: 'itc-ads-5e9c6.firebaseapp.com',
      databaseURL: 'https://itc-ads-5e9c6.firebaseio.com',
      projectId: 'itc-ads-5e9c6',
      storageBucket: 'itc-ads-5e9c6.appspot.com',
      messagingSenderId: '280754430439'
    })
  }
}).$mount('#app')
