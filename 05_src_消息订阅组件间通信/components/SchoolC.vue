<template>
  <!-- 插件数据没模板写在这 -->
  <div class="demo">
    <h2>学校名称：{{ SchoolName }}</h2>
    <h2>学校地址：{{ Adress }}</h2>
  </div>
</template>


<script>
import Vue from "vue";
import pubsub from "pubsub-js";
// import func from 'vue-temp/vue-editor-bridge';
const SchoolC = Vue.extend({
  name: "SchoolC",
  data() {
    return {
      SchoolName: "北京大学",
      Adress: "北京",
    };
  },
  methods: {},
  mounted() {
    //school组将挂在完毕马上订阅消息接受其他组件传来的数据
    this.pubId = pubsub.subscribe("hello", (msgdata,data)=>{
      console.log("有人发布了hello消息,hello消息回调执行了", msgdata,data);
    });
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubId)

  }
});

export default SchoolC;
</script>
<style scoped>
.demo {
  background-color: rgb(108, 108, 242);
}
</style>


