import Vue from 'vue'
import Vuex from 'vuex'
import storeBranch from './storeBranch'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    storeBranch: storeBranch
  }
})
