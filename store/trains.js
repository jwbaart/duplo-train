export const state = () => ({
  list: []
})

export const mutations = {
  add(state, train) {
    state.list.push(train)
  }
}

export const actions = {
  async addTrain({ commit }, train) {
    await train.connect()
    commit('add', train)
  }
}
