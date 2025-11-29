import { createStore } from 'vuex'

const states = {
  seconds: 0,
}

const actions = {
  triggerCounter: ({ commit }) => {
    setInterval(() => {
      commit('setSeconds', 1)
    }, 1000)
  },
}

const mutations = {
  setSeconds: (states, payload) => {
    states.seconds += payload
  },
}

const getters = {
  getSeconds: (states) => {
    return states.seconds
  },
}

export const store = createStore({
  state: states,
  actions: actions,
  mutations: mutations,
  getters: getters,
})
