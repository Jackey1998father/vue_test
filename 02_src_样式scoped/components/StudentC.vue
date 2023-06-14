<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 >学生名称：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    
  </div>
</template>


<script>
import Vue from 'vue'

//交互样式写在这里
const StudentC = Vue.extend({
  name: "StudentC",


  data() {
    return {
      msg:"欢迎学生",   
      name:"jacky", 
      age:24
    };
  },


});

//暴露
export default StudentC;
</script>
<style scoped>

.demo{
  background-color: rgb(225, 225, 39);
}
  
</style>



