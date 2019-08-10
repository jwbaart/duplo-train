export const state = () => ({
  trains: [],
  loading: false
})

export const mutations = {
  add(state, train) {
    state.trains.push(train)
  },
  setLoading(state, loading) {
    state.loading = loading
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
          'duplo/addTrain',
          train
        )
        trainsAddTrainResult ? resolve() : reject(new Error('No train found'))
      })
    })
  }
}

export const getters = {
  trains: (state) => state.trains,
  isLoading: (state) => state.loading
}
