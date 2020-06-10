import {xiaobaiOptions} from '@/common/options/workOptions'


export default {
  state: {
    selectOptions:null ,//当前work页面需要的数据
  },
  mutations: {
    //将得到的值赋值给selectOptions
    injectOption(state: {},{selectOptions}: {selectOptions: {[propName: string]: unknown}}){
      console.log(state,'');
      console.log(selectOptions,'');
    }
  },
  actions: {
    setOptions({commit}: {commit: (str: string,obj: {}) => void},{setId}: {setId: string}){
      console.log(setId,'this is my store setId');
      //设置当前页面需要的数据
      switch(setId){
        case '000': //'000'代表李小白的数据
          commit('',{selectOptions:xiaobaiOptions})
      }
    },
  },
  getters :{

  },
  modules: {
   
  },
  namespaced: true,
}
