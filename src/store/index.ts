import Vue from 'vue'
import Vuex from 'vuex'
import goods from './goods'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'李大白123'
  },
  mutations: {
    setName(state: {[propname: string]: string},str: string){
      state.name = str
    }
  },
  actions: {
  },
  modules: {
    goods, //
  }
})
