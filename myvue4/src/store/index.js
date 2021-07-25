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
        )
    }
  },
  modules: {
  }
})
