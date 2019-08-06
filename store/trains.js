const clonedeep = require('lodash.clonedeep')

export const state = () => ({
  list: [],
  activeTrain: null,
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
    console.log('activeTrain', train)
    state.activeTrain = clonedeep(train)
  }
}

export const actions = {
  async addTrain({ commit }, train) {
    commit('setLoading', true)
    try {
      // TODO Creates error state mutation outside of mutations
      await train.connect()
    } catch {
      return false
    }
    commit('add', train)
    commit('setActiveTrain', train)
    commit('setLoading', false)
    return true
  },
  async searchTrain({ commit }) {
    commit('setLoading', true)
    // Returns undefined
    // const scanResult = await this.$pup.scan()
    await this.$pup.scan()
    return new Promise((resolve, reject) => {
      this.$pup.on('discover', async (train) => {
        console.log('train discovered')
        const trainsAddTrainResult = await this.dispatch(
          'trains/addTrain',
          train
        )
        trainsAddTrainResult ? resolve() : reject(new Error('No train found'))
      })
    })
  }
}

export const getters = {
  trains: (state) => state.list,
  activeTrain: (state) => state.activeTrain,
  isLoading: (state) => state.loading
}
