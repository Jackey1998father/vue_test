<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo">
    <h2 v-if="n!=0">学校名称：{{ SchoolName }}</h2>
    <h2 v-if="n!=0">学校地址：{{ Adress }}</h2>

    <button class="btn" @click="fn">点我</button>
  </div>
</template>


<script>
import Vue from 'vue'
//交互样式写在这里
const SchoolC = Vue.extend({
  name: "SchoolC",

  //一定不要写el配置项，最后被vm支配该组件指向指定的模板
  data() {
    //组件数据不能写成对象式只能是函数式
    return {
      SchoolName: "北京大学",
      Adress: "北京",
      n: 0, 
    };
  },
  methods: {
    fn() {
      console.log(SchoolC);
      
      this.n++;
    },
  },

});

//暴露
export default SchoolC;
</script>


<style >
/* 样式属性写在这里 */
.demo {
  background-color: pink;
  height: 300px;
}

</style>

