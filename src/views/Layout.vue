<template>
  <div class="layout">
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

import {Component,Vue,Watch} from 'vue-property-decorator'
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
    //当跳转的是当前页面 直接返回
    if(this.$route.name == url){
      return; 
    }
    this.$router.push({name:url})
  }
  private routerName = '1'
  
  //加载的时候获取路由的信息并确定该active的菜单
  created() {
    const timer: Itimer = new Date() 
    this.info.year = String(timer.getFullYear());
    this.info.month = String(timer.getMonth()+1);
    this.info.date = String(timer.getDate());
    this.info.hour = String(timer.getHours());
    this.info.minutes = String(timer.getMinutes());
    console.log(this.info,'');
    // this.info.year = timer.getFullYear();
    // const that = this;
    const name = this.$route.name; //获取当前的name
    console.log(this.$route.name,'');
    this.navTopList.forEach(item=>{

      if((item as {url: string}).url == name){
        this.defafultActive = (item as {id: string}).id
      }
    })
  }


  //监听路由变化 菜单动态变换
  @Watch('$route',{immediate:true,deep:true})
  getNavTopListActive(newVal: {}){
    const name = (newVal as {name: string}).name;
    this.navTopList.forEach(item=>{
      if((item as {url: string}).url == name){
        this.defafultActive = (item as {id: string}).id
      }
    })
  }
  

}

</script>

<style lang="scss" scoped>
  .layout{
    width: 100%;
    margin-bottom: 50px;
    .navtop{
      height: 100px;
      border-bottom: 1px solid #dcdfe6;
      margin-bottom: 30px;
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
