import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import BuyModalComponent from '@/components/shared/BuyModal'

Vue.config.productionTip = false
Vue.component('app-buy-modal', BuyModalComponent)

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

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
