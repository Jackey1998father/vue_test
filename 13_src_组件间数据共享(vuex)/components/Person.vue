<template>
<div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入姓名:" v-model="name">
    <button @click="add">添加</button>
    <h3 style="color:hotpink">上方组件求和为:{{total}}</h3>
    <ul >
        <li v-for="(p, index) in person" :key="index">{{p.name}}</li>
           
    </ul>
</div>
  
</template>

<script>
import { nanoid } from 'nanoid'

export default {
    name:'Person',
    data(){
        return{
            name:''
        }
    },
    
    computed:{
        person(){
            return this.$store.state.person
        },
        total(){
            return this.$store.state.sum
        },

    },
    methods: {
        add(){
            // console.log("niaho");
            this.$store.commit("ADD",{id:nanoid,name:this.name})
        }
    },

    

}
</script>

<style>

</style>