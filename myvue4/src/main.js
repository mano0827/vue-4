import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAQgibyiIuDXiPJM53RfxYqgxERCWKMvEo",
  authDomain: "myvue4-2c280.firebaseapp.com",
  projectId: "myvue4-2c280",
  storageBucket: "myvue4-2c280.appspot.com",
  messagingSenderId: "1066329647593",
  appId: "1:1066329647593:web:869bfd069796be501bc378",
  measurementId: "G-W0G9NJTSV4"

};

firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
