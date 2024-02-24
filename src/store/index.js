import { createStore } from 'vuex'

export default createStore({
  state: {
    workers : []
  },
  getters: {
    getAllJob(state){
      return state.workers
    }
  },
  mutations: {
    addWorker(state, par){
      this.state.workers.push(par)
    }
  },
  actions: {
  },
  modules: {
  }
})
