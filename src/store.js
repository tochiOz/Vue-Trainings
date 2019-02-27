import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {//this saves the state o data needed in the components
    counter: 0,
    value: 0
  },

  mutations: {//Mutations are commited to update the state to a different value
    increment(state, payload) {
      state.counter += payload
    },

    decrement(state, payload) {
        state.counter -= payload
    },

    updateValue(state, payload) {
      state.value = payload
    }
  },

  actions: {
    increment({commit}, payload) {
      return commit('increment', payload)
    },

    decrement({commit}, payload) {
      return commit('decrement', payload)
    },

    updateValue({commit}, payload) {
      commit('updateValue', payload)
    }
  },

  getters: {
    counter(state) {
      return state.counter
    },

    doubleCouter (state) {
      return state.counter + ' Clicks'
    },

    value(state) {
      return state.value
    }
  }
})
