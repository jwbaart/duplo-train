export const state = () => ({
  list: [],
  activeTrain: {},
  loading: false
})

export const mutations = {
  add(state, train) {
    state.list.push(train)
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setActiveTrain(state, train) {
    state.activeTrain = { ...train }
  }
}

export const actions = {
  async addTrain({ commit }, train) {
    commit('setLoading', true)
    // TODO Creates error state mutation outside of mutations
    await train.connect()
    commit('add', train)
    commit('setActiveTrain', train)
    commit('setLoading', false)
  },
  async searchTrain({ commit }) {
    commit('setLoading', true)
    await this.$pup.scan()
    await this.$pup.on('discover', async (train) => {
      await this.dispatch('trains/addTrain', train)
    })
  }
}

export const getters = {
  activeTrain: (state) => state.activeTrain
}
