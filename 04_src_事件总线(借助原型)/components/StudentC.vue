<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑aitaguigu事件</button>
  </div>
</template>


<script>
import Vue from "vue";

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
    sendStudentName() {
      this.$emit("aitaguigu", this.name); //触发StudentC组件实例身上的aitaguigu事件1
      this.$emit("demo");
    },
    unbind() {
      // this.$off("aitaguigu"); //单个事件解绑
      this.$off(["aitaguigu", "demo"]); //多个事件解绑  或者 this.$off()
    },
  },
  mounted() {
    // console.log("nihao");
    this.x.$on("getName1", (data) => {
      console.log("我是组件student", data);
    });
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



