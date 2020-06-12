<template>
  <div class="work">
    <div ref="one" class="one"></div>
    <div ref="two" class="one"></div>
    <div ref="three" class="one" style="margin-right:0"></div>
    <SelectListButton :List="selectListButton" @getId="getId"></SelectListButton>
  </div>
</template>

<script lang="ts">
import SelectListButton from '@/components/work/selectListButton.vue';
import {selectListButton} from './../../common/options/workOptions'
import {Component,Vue} from 'vue-property-decorator'
import {namespace} from 'vuex-class'

const wrok = namespace('work')

@Component({
  components:{
    SelectListButton, //选择组件
  }
})
export default class Work extends Vue{
  @wrok.Action('setOptions') private setOptions!: (str: {setId: string}) => void
  @wrok.State('selectOptions') private selectOptions!: {[proname: string]: {}}
  private selectListButton: {} = selectListButton
  private myEchartOne!: {setOption: (obj: {}) => unknown} 
  private myEchartTWo!: {setOption: (obj: {}) => unknown} 
  private myEchartThree!: {setOption: (obj: {}) => unknown} 
  beforeMount() {
    //在挂载之前 将state中属性赋值
    this.setOptions({setId:'000'})
  }
  mounted() {
// this.setOptions('000')
    // this.setOptions()
    // 得到echartsOne实例
    
    this.myEchartOne = this.$api.echarts.init(this.$refs.one);
    this.myEchartOne.setOption(this.selectOptions.optionsOne); 

    // 得到echartsTwo实例
    this.myEchartTWo = this.$api.echarts.init(this.$refs.two);
    this.myEchartTWo.setOption(this.selectOptions.optionsOne); 

    // 得到echartsThree实例
    this.myEchartThree = this.$api.echarts.init(this.$refs.three);
    this.myEchartThree.setOption(this.selectOptions.optionsOne); 

  }
  private getId(id: string){
    switch(id){
      case '000':{
        const optionss = {
           series : [
                {
                    
                    data:[
                        {value:1000, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ]
                }
            ]
        }
        this.myEchartOne.setOption(optionss); 
        break;
      }
      case '001':
        console.log('001');
      break;
      case '002':
        console.log('002');
      break;
    }
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