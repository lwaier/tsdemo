import {xiaobaiOptions} from '@/common/options/workOptions'


export default {
  state: {
    selectOptions:null ,//当前work页面需要的数据
  },
  mutations: {
    //将得到的值赋值给selectOptions
    injectOption(state: {selectOptions: {}},{selectOptions}: {selectOptions: {[propName: string]: unknown}}){
      state.selectOptions = selectOptions
    }
  },
  actions: {
    setOptions({commit}: {commit: (str: string,obj: {}) => void},{setId}: {setId: string}){
      //设置当前页面需要的数据
      switch(setId){
        case '000': //'000'代表李小白的数据
          commit('injectOption',{selectOptions:xiaobaiOptions})
          break;
        case '001': //'000'代表李小白的数据
          commit('injectOption',{selectOptions:xiaobaiOptions})
          break;
        case '002': //'000'代表李小白的数据
          commit('injectOption',{selectOptions:xiaobaiOptions})
          break;
      }
    },
  },
  getters :{

  },
  modules: {
   
  },
  namespaced: true,
}
