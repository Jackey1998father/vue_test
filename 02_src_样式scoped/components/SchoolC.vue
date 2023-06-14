<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo">
    <h2 >学校名称：{{ SchoolName }}</h2>
    <h2 >学校地址：{{ Adress }}</h2>


  </div>
</template>


<script>
import Vue from 'vue'

const SchoolC = Vue.extend({
  name: "SchoolC",
  data() {
    return {
      SchoolName: "北京大学",
      Adress: "北京",
    };
  }
});

export default SchoolC;
</script>
<style scoped>
   .demo{

    background-color: rgb(108, 108, 242);
   }
  
</style>


