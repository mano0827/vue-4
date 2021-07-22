import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    email: '',
    password: ''
  },
  mutations: {
    AddToState: function (state, payload) {
      state.email = payload.email
      state.password = payload.password
      state.userName = payload.userName

    }
  },
  actions: {
    signUp: function (context, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: payload.userName,
          },
          )
            .then(() => {
              context.commit('AddToState', payload)
            })
        })
        .catch(
        )
    }
  },
  modules: {
  }
})
