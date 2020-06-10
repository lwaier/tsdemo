<template>
  <div class="work">
    <div ref="one" class="one"></div>
    <div ref="two" class="one"></div>
    <div ref="three" class="one" style="margin-right:0"></div>
  </div>
</template>

<script lang="ts">

import {xiaobaiOptions} from './../../common/options/workOptions'

import {Component,Vue} from 'vue-property-decorator'
import {namespace} from 'vuex-class'

const wrok = namespace('work')

@Component
export default class Work extends Vue{
  @wrok.Action('setOptions') private setOptions!: (str: {setId: string}) => void

  beforeMount() {
    //在挂载之前 将state中属性赋值
    this.setOptions({setId:'000'})
  }
  



  mounted() {
// this.setOptions('000')
    // this.setOptions()
    // 得到echartsOne实例
    const myEchartOne = this.$api.echarts.init(this.$refs.one);

  
    myEchartOne.setOption(xiaobaiOptions.optionsOne); 

    // 得到echartsTwo实例
    const myEchartTWo = this.$api.echarts.init(this.$refs.two);
    myEchartTWo.setOption(xiaobaiOptions.optionsOne); 

    // 得到echartsThree实例
    const myEchartThree = this.$api.echarts.init(this.$refs.three);
    myEchartThree.setOption(xiaobaiOptions.optionsOne); 

  }

  
}


</script>

<style lang="scss" scoped>
  .work{
    margin-left: 10px;
    margin-right: 10px;
    overflow: hidden;
    .one{
      width: 30%;
      height: 500px;
      margin-right: 5%;
      margin-right: 5%;
      float: left;
    }
  }
</style>