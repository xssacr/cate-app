import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSwipeable : true
  },
  mutations: {
    SET_SWIPEABLE(state, status) {
      state.isSwipeable = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
