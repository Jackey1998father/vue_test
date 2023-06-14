
<template>
  <div>
    <h1>你好啊</h1>
    <SchoolC ></SchoolC> <hr> 

    <StudentC  ></StudentC><hr>

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
  
    
  }
});

export default App; //暴露
</script>

<style>
</style>