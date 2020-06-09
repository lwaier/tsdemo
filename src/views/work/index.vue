<template>
  <div class="work">
    <div ref="one" class="one"></div>
    <div @click="goToOther">我要去别的页面</div>
  </div>
</template>

<script lang="ts">


import {Component,Vue} from 'vue-property-decorator'
@Component
export default class Work extends Vue{

  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = this.$api.echarts.init(this.$refs.one);
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    }); 
  }

  
}


</script>

<style lang="scss" scoped>
  .work{
    margin-left: 10px;
    margin-right: 10px;
    .one{
      width: 500px;
      height: 500px;
      float: left;
    }
  }
</style>