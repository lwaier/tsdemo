<template>
  <div class="about">
    <div v-if="false">
      <h1>{{title}}</h1>
      <h2>{{info.year}}/0{{info.month}}/0{{info.date}} {{info.hour}}:{{info.minutes}}</h2>
    </div>
    <div class="navtop">
        <div class="navtop_left"></div>
        <div class="navtop_right">
          <el-menu mode="horizontal" class="el-menu-demo" :default-active="defafultActive">
            <el-menu-item :index="item.id"  :key="index" v-for="(item,index) in navTopList"  @click="goToOnePage(item)">{{item.name}}</el-menu-item>
          </el-menu>
        </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">

import {Component,Vue} from 'vue-property-decorator'
interface Itimer {
  getFullYear: () => number;
  getMonth: () => number;
  getDate: () => number;
  getHours: () => number;
  getMinutes: () => number;
}
interface Iinfo {
  year: string;
  month: string;
  date: string;
  hour: string;
  minutes: string;
}
@Component({
  
})
export default class Layout extends Vue{
  private title = 'This is my improve proof , it can prove me is attempt and I not hesitate , tough , sunlight'
  private info: Iinfo = {year: '',month: '',date: '',hour: '',minutes: '',}
  private navTopList: {}[] = [{
    id:'001',
    name:'工作统计',
    url:'workIndex'
  },{
    id:'002',
    name:'学习统计',
    url:'learningIndex'
  },{
    id:'003',
    name:'睡眠统计',
    url:'sleepIndex'
  },{
    id:'004',
    name:'锻炼统计',
    url:'athleticIndex'
  },{
    id:'005',
    name:'娱乐统计',
    url:'entertaintmentIndex'
  }]
  private defafultActive = '002'
  private goToOnePage(data: {url: string;[propName: string]: unknown}): void{
    const url = data.url;
    this.$router.push({name:url})
    console.log(this.$route,'');
  }


  created() {
    const timer: Itimer = new Date() 
    this.info.year = String(timer.getFullYear());
    this.info.month = String(timer.getMonth()+1);
    this.info.date = String(timer.getDate());
    this.info.hour = String(timer.getHours());
    this.info.minutes = String(timer.getMinutes());
    console.log(this.info,'');
    // this.info.year = timer.getFullYear();
  }
    
  

}

</script>

<style lang="scss" scoped>
  .about{
    width: 100%;
    .navtop{
      height: 100px;
      border-bottom: 1px solid #dcdfe6;
      .navtop_left{
        float: left;
        height: 100%;
      }
      .navtop_right{
        float: right;
        height: 100%;
        .el-menu-demo{
          height: 100%;
        }
        .el-menu-item{
          height: 100%;
          line-height: 100px;
        }
      }
    }
  }
</style>
