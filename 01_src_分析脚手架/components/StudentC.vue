<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo2">
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

  //一定不要写el配置项，最后被vm支配该组件指向指定的模板
  data() {
    //组件数据不能写成对象式只能是函数式
    return {
      msg:"欢迎学生",
      // name: "张三",   //这里不必写死， 可以通过props项灵活分配数据
      // age: 25,
      
    };
  },
  //简写，会存在字符型转换不成数字型的问题！！
  // props:["name","age"]

  props:{
    name:{
      type:String, 
      require:true //表示这个name项是必须的

    },
    age:{
      type:Number,
       default:99   //默认值是99
    }
  }

});

//暴露
export default StudentC;
</script>




