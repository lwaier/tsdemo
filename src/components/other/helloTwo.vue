<template>
  <div>
      <h1 @click="emitHobbyFn(myHobby, $event)">{{myHobby}}</h1> 
      <h1 @click="setStr('我不大接受')">{{str}}</h1>
      <p style="color:red" @click="setName('45454')">{{aa}}</p>
      <p style="color:red">{{bb}}</p>

  </div>
</template>

<script lang="ts">
import {Component,Vue,  PropSync,Watch, Emit, Inject} from 'vue-property-decorator'
import {Mutation} from 'vuex-class'
@Component({
  
})
export default class HelloTwo extends Vue{
  private myHobby  = '123456'
  @PropSync('str',{type:String,default:'classrom light'}) private strNew!: string
  setStr(text: string): void{
    console.log(text,'text');
    this.strNew = text
  }
  @Watch('strNew',{
    deep:true,
    immediate:true
  })
  private strNewWatch(newStr: string,oldStr: string): void{
    console.log(newStr,'strNew新值');
    console.log(oldStr,'strNew旧值');
  }

  @Emit('getHobby')
  private emitHobbyFn(myHobby: string, event: unknown){
    console.log(myHobby,'myHobby');
    console.log(event,'event');
    return '我为什么没有event'
  }

  @Inject({
    from:'foo',
    default:'lidabai'
  })
  aa !: string

   @Inject({
    from:'topic',
    default:'lidabai'
  })
  bb !: string

  @Mutation setName !: (aa: string) => {}

}


</script>

<style>

</style>