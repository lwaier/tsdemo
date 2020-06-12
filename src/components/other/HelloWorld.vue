<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{age}}</h2>
    <h3>{{name |someOne}}</h3>
    <h1>{{hobby}}</h1>
    <HelloTwo :str.sync="hobby" @getHobby="getHobbyFn"></HelloTwo>
    <MyInput v-model="str"></MyInput>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Provide } from 'vue-property-decorator';
import HelloTwo from './helloTwo.vue'
import MyInput from './myInput.vue'

@Component({
  filters:{
    someOne(valueOne: string){
      return valueOne+'someOne for love'
    }
  },
  components:{
    HelloTwo,
    MyInput
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop([String,Number]) private age!: string|number;
  @Prop({
    type:String,
    default:'我是魔鬼伟'
  })private name!: string
  private hobby = "das"

  private getHobbyFn<T>(data: string,dataTwo: string,event: unknown){
    console.log(data,'123456');
    console.log(dataTwo,'event');
    console.log(event,'event');
  }

  private str = '123456'

  @Watch('str',{deep:true})
  ccon(newStr: string , oldStr:  string){
    console.log(newStr,'newStr');
    console.log(oldStr,'oldStr');
  }
  setStr(){
    this.str = '我是新的值'
  }
  constructor(){
    super();
    setTimeout(() => {
      this.setStr()
        // console.log(this.str,'this.str');
    }, 5000);
  }

  @Provide()
  // foo = 'lixiaobai'
  topic = 'learning'

   @Provide()
  foo = 'lixiaobai'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
