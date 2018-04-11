import Vue from 'vue'
import Vuex from 'vuex'

import shop from './modules/shop'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    shop: {
      namespaced: true,
      ...shop
    }
  }
})

export default store
