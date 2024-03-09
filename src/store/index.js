import { createStore } from 'vuex'

export default createStore({
  state: {
    workers : []
  },
  getters: {
    getAllJob(state){
      return state.workers
    },
    getCatId: state =>(id) =>{
      return state.workers.find(a=> a.idCat == id);
    }
  },
  mutations: {
    addWorker(state, par){
      this.state.workers.push(par)
    },
    deleteCatName(state, par){
      state.workers = state.workers.filter(a => a.idCat != par)
    },

    editWorker(state, par){
      state.workers = state.workers.filter(a => a.idCat != par.idCat);
      state.workers.push(par);
    }
  },
  actions: {
  },
  modules: {
  }
})
