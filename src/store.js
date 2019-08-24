import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {}
  },
  mutations: {
      GET_ACCOUNT(state,payload){
        // state.account = state.account+payload
      }
  },
  actions: {

  }
})
