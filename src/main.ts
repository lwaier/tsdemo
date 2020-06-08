import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.config.productionTip = false
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip'); 
require('echarts/lib/component/title');  
console.log(echarts,'echarts');

Vue.prototype.$api = {
  echarts
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
