import Vue from 'vue'
import Vuex from 'vuex'
import storeBranch from './storeBranch'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: "全局Store",
    globalLoading: false
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    storeBranch: storeBranch
  }
})

export default store
