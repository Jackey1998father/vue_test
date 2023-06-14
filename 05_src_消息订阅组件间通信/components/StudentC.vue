<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    

    <button @click="sendToSchool">把学生名发给学校</button>
  </div>
</template>


<script>
import Vue from "vue";

import pubsub from "pubsub-js"
//交互样式写在这里
const StudentC = Vue.extend({
  name: "StudentC",

  data() {
    return {
      msg: "欢迎学生",
      name: "jacky",
      name1: "kjk",
      age: 24,
    };
  },
  methods: {
    
    sendToSchool(){
      pubsub.publish('hello',666)

    }
  },
 
  
});

//暴露
export default StudentC;
</script>
<style scoped>
.demo {
  background-color: rgb(225, 225, 39);
}
</style>



