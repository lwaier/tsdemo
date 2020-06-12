<template>
  <div>
      <div>This is my input</div>
      <div><input type="text" placeholder="I am evil bai" :value="str" @input="changeFn($event)"></div>
      <p style="color:blue">{{kkk}}</p>
      <p style="color:blue">{{sss}}</p>
  </div>
</template>

<script lang="ts">
import {Component,Emit,Vue, Model} from 'vue-property-decorator'
import {State,namespace} from 'vuex-class'

const myStore = namespace('goods')

@Component({

})
export default class MyInput extends Vue{
  @Model('getStr',{type: String,default:'123'}) private str !: string
  @Emit('getStr')
   private changeFn<T extends {target: {value: string}}>(event: T) {
     console.log(this,'this');
     console.log(this.kkk,'this.kkk');
      return event.target.value
   }
  
  @State('name') kkk !: string 

  @myStore.State('age') sss !: string
  
}
</script>

<style>

</style>