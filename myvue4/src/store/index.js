import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'


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
        })
        .catch(
          alert('入力に不備があります')
        )
    }
  },
  modules: {
  }
})
