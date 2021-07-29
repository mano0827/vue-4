import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      password: ''
    }
  },
  getters: {
    email(state) {
      return state.email;
    },
    password(state) {
      return state.password;
    },
    name(state) {
      return state.name;
    },
  },
  mutations: {
    setUser: function (user, payload) {
      user.email = payload.email
      user.password = payload.password
      user.name = payload.name

    }
  },
  actions: {
    signUp: function (context, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: payload.name,
          },
          )
            .then(() => {
              context.commit('setUser', payload)
            })
            .then(() => {
              router.push('/home')
            })
        })
        .catch(function (error) {
          alert('ログインできません（' + error.message + '）');
        });
    },
    signIn: function (context, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: payload.name,
          },
          )
            .then(() => {
              context.commit('setUser', payload)
            })
            .then(() => {
              router.push('/home')
            })
        })
        .catch(function (error) {
          alert('パスワードもしくはメールアドレスが異なります（' + error.message + '）');
        });
    },
  },
  modules: {
  }
})
