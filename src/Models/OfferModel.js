export const defaultState = {
  offer: {}
}

export default {
  namespaced: true,

  state: defaultState,

  getters: {
    offer: (state) => state.offer
  },

  actions: {
    saveOffer({commit}, value) {
      commit('setOffer', value)
    }
  },

  mutations: {
    setOffer(state, value) {
      state.offer = value
    }
  }
}
