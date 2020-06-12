<template>
    <div>
        <div class="list">
            <el-tag v-for="(item,index) in List" :key="index" @click="setOptions(item)" class="tag">{{item.name}}</el-tag>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component,Vue,Prop,Emit} from 'vue-property-decorator';
    @Component
    export default class SelectListButton extends Vue{
        @Prop(Array) private List!: {}[];
        @Emit('getId')
        private setOptions(item: {id: string}){
            console.log('getId');
            return item.id; //获取要选择的id
        }
        // mounted() {
        //     console.log(this.List,'woshimdaojda');   
        // }
    }
</script>

<style lang="scss" scoped>
    .list{
        height: 40px;
        line-height: 40px;
        position: absolute;
        left: 50%;
        bottom: 100px;
        transform: translateX(-50%);
        .tag{
            margin: 0 10px;
        }
    }
</style>