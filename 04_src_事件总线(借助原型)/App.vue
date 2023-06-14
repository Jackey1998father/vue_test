
<template>
  <div>
    <!-- <img src="./assets/logo.png" alt="logo"> -->
    <h1>你好啊</h1>
   <!-- 通过父组件给子组件传递一个函数类型的props实现：子给父传递数据 -->
    <SchoolC :getSchoolName="getSchoolName"></SchoolC> <hr> 

    <!-- 给组件StudentC实例对象身上绑定了一个aitaguigu事件，但凡事件触发，demo函数被调用-->
    <StudentC v-on:aitaguigu="demo" @demo="m1" @click.native="clicking"></StudentC><hr>

  </div>
</template>

<script>
import Vue from 'vue'



import SchoolC from "./components/SchoolC.vue";
import StudentC from "./components/StudentC.vue";

const App = Vue.extend({
  name: "App",
  components: {
    SchoolC,
    StudentC,
  },
  methods:{
    getSchoolName(name){
      console.log(name);
     

    },
    demo(name){
        console.log("aitaguigu事件被触发了",name);
      },
    m1(){
      console.log("demo事件被触发了");
      
    },
    clicking(){
      alert("11")
    }
  }
});

export default App; //暴露
</script>

<style>
</style>