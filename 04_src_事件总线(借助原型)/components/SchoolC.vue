<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo">
    <h2 >学校名称：{{ SchoolName }}</h2>
    <h2 >学校地址：{{ Adress }}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
    <button @click="sendToStudent">把学校名给学生</button>


  </div>
</template>


<script>
import Vue from 'vue'

const SchoolC = Vue.extend({
  props:["getSchoolName"], //App父组件传来的函数挂到了vc实例身上
  name: "SchoolC",
  data() {
    return {
      SchoolName: "北京大学",
      Adress: "北京",
    };
  },
  methods:{
    sendSchoolName(){
       this.getSchoolName(this.SchoolName)  //把数据传给父组件app
       
       
    },
    sendToStudent(){
      this.x.$emit("getName1",this.SchoolName)

    }


   
  }
});

export default SchoolC;
</script>
<style scoped>
   .demo{

    background-color: rgb(108, 108, 242);
   }
  
</style>


